import { resolveTransaction } from 'common/arweave';

import { TAGS } from 'helpers/config';
import { ProfileArgsType, ProfileType, ZoneType } from 'helpers/types';

import { createZone, getZone, updateZone } from './zones';

// TODO: Bootloader
export async function createProfile(args: ProfileArgsType, wallet: any, callback?: (status: any) => void): Promise<string | null> {
	let profileId: string | null = null;

	const tags: { name: string, value: string }[] = [];

	const addBootTag = (key: string, value: string | undefined) => {
		if (value) {
			tags.push({ name: `${TAGS.keys.bootloader}-${key}`, value });
		}
	};

	const addImageTag = async (imageKey: 'Thumbnail' | 'Banner') => {
		const key: any = imageKey.toLowerCase();
		if ((args as any)[key]) {
			try {
				const resolvedImage = await resolveTransaction((args as any)[key]);
				addBootTag(imageKey, resolvedImage);
			} catch (e: any) {
				if (callback) callback(`Failed to resolve ${imageKey}: ${e.message}`);
				else console.error(e);
			}
		}
	};

	addBootTag('Username', args.username);
	addBootTag('DisplayName', args.displayName);
	addBootTag('Description', args.description);

	await Promise.all([addImageTag('Thumbnail'), addImageTag('Banner')]);

	try {
		profileId = await createZone({ tags: tags }, wallet, callback);

		// profileId = await createZone({}, wallet, callback);

		// if (profileId) {
		// 	const profileUpdateId = await updateProfile(args, profileId, wallet, callback ?? undefined);
		// 	console.log(`Profile update: ${profileUpdateId}`);
		// }
	}
	catch (e: any) {
		throw new Error(e.message ?? 'Error creating profile');
	}

	return profileId;
}

export async function updateProfile(args: ProfileArgsType, profileId: string, wallet: any, callback?: (status: any) => void): Promise<string | null> {
	if (profileId) {
		let data: ProfileArgsType = {
			username: args.username,
			displayName: args.displayName,
			description: args.description
		};

		if (args.thumbnail) {
			try {
				data.thumbnail = await resolveTransaction(args.thumbnail);
			} catch (e: any) {
				if (callback) callback(`Failed to resolve thumbnail: ${e.message}`);
			}
		}

		if (args.banner) {
			try {
				data.banner = await resolveTransaction(args.banner);
			} catch (e: any) {
				if (callback) callback(`Failed to resolve banner: ${e.message}`);
			}
		}

		try {
			return await updateZone(data, profileId, wallet);
		}
		catch (e: any) {
			throw new Error(e.message ?? 'Error creating profile');
		}
	}
	else {
		throw new Error('No profile provided');
	}
}

export async function getProfileById(profileId: string): Promise<ProfileType & any | null> {
	try {
		const zone = await getZone(profileId);

		if (zone && zone.store) {
			let profile: any = {
				id: profileId,
				walletAddress: null, // TODO: Get owner
				username: zone.store.Username ?? 'None',
				displayName: zone.store.DisplayName ?? 'None',
				description: zone.store.Description ?? 'None',
			};

			if (zone.store.Thumbnail) profile.thumbnail = zone.store.Thumbnail;
			if (zone.store.Banner) profile.banner = zone.store.Banner;
			if (zone.Assets) profile.assets = zone.Assets;

			for (const [key, value] of Object.entries(zone.store)) {
				if (!(key in profile)) {
					profile[key] = value;
				}
			}

			return profile;
		}
	}
	catch (e: any) {
		throw new Error(e.message ?? 'Error fetching profile');
	}
}

// TODO
export async function getProfileByWalletAddress(walletAddress: string): Promise<ProfileType & any | null> {
	console.log(`Get profile by wallet: ${walletAddress}`);
	const profileId = 'OcqY7B_MHQ_3vkS5rQ_TXhG7vEv9rKz117fX147t5R0';
	return await getProfileById(profileId);
	// return {
	// 	id: null
	// }
}
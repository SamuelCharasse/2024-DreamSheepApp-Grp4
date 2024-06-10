/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Avatars = "Avatars",
	Commentaires = "commentaires",
	Dreams = "dreams",
	Likes = "likes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AvatarsRecord = {
	Name?: string
	Skin?: string
}

export type CommentairesRecord = {
	Message?: string
	dreamId?: RecordIdString
	userId?: RecordIdString
}

export enum DreamsTagsOptions {
	"humour" = "humour",
	"amour" = "amour",
	"drôle" = "drôle",
	"étrange" = "étrange",
	"joyeux" = "joyeux",
	"peur" = "peur",
	"horreur" = "horreur",
}

export enum DreamsTypeOptions {
	"Rêve" = "Rêve",
	"Cauchemar" = "Cauchemar",
}
export type DreamsRecord = {
	date?: IsoDateString
	description?: string
	favoris?: boolean
	partage?: boolean
	recurrent?: boolean
	tags?: DreamsTagsOptions
	title?: string
	type?: DreamsTypeOptions
	userId?: RecordIdString
}

export type LikesRecord = {
	dreamId?: RecordIdString
	userId?: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	name?: string
	users_avatar?: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type AvatarsResponse<Texpand = unknown> = Required<AvatarsRecord> & BaseSystemFields<Texpand>
export type CommentairesResponse<Texpand = unknown> = Required<CommentairesRecord> & BaseSystemFields<Texpand>
export type DreamsResponse<Texpand = unknown> = Required<DreamsRecord> & BaseSystemFields<Texpand>
export type LikesResponse<Texpand = unknown> = Required<LikesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Avatars: AvatarsRecord
	commentaires: CommentairesRecord
	dreams: DreamsRecord
	likes: LikesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Avatars: AvatarsResponse
	commentaires: CommentairesResponse
	dreams: DreamsResponse
	likes: LikesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Avatars'): RecordService<AvatarsResponse>
	collection(idOrName: 'commentaires'): RecordService<CommentairesResponse>
	collection(idOrName: 'dreams'): RecordService<DreamsResponse>
	collection(idOrName: 'likes'): RecordService<LikesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

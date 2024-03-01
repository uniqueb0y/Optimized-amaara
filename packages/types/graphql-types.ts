import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

export type AppSettingInput = {
  appName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  logo: Scalars['String']['input'];
  supportEmail: Scalars['String']['input'];
  tagLine?: InputMaybe<Scalars['String']['input']>;
};

export type AppSettingResult = {
  __typename?: 'AppSettingResult';
  appName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logo: Scalars['String']['output'];
  supportEmail: Scalars['String']['output'];
  tagLine?: Maybe<Scalars['String']['output']>;
};

export type ContactUsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsResult = {
  __typename?: 'ContactUsResult';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAppSetting: AppSettingResult;
  createContactUs: ContactUsResult;
  createRole: RoleResult;
  createSeetu: SeetuResult;
  createUser: UserResult;
  createUserInfo: UserInfoResult;
  deleteContactUs: ContactUsResult;
  deletePhoneOtp: OtpResult;
  deleteRole: RoleResult;
  deleteSeetu: SeetuResult;
  deleteUser: UserResult;
  deleteUserInfo: UserInfoResult;
  sendPhoneOtp: OtpResult;
  updateAppSetting: AppSettingResult;
  updateRole: RoleResult;
  updateSeetu: SeetuResult;
  updateUser: UserResult;
  updateUserInfo: UserInfoResult;
  verifyPhoneOtp: OtpResult;
};


export type MutationCreateAppSettingArgs = {
  appSettingInput: AppSettingInput;
};


export type MutationCreateContactUsArgs = {
  contactUsInput: ContactUsInput;
};


export type MutationCreateRoleArgs = {
  roleInput: RoleInput;
};


export type MutationCreateSeetuArgs = {
  seetuInput: SeetuInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationCreateUserInfoArgs = {
  userInfoInput: UserInfoInput;
};


export type MutationDeleteContactUsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePhoneOtpArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSeetuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserInfoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendPhoneOtpArgs = {
  phoneOtpInput: PhoneOtpInput;
};


export type MutationUpdateAppSettingArgs = {
  appSettingInput: AppSettingInput;
};


export type MutationUpdateRoleArgs = {
  roleInput: RoleInput;
};


export type MutationUpdateSeetuArgs = {
  seetuInput: SeetuInput;
};


export type MutationUpdateUserArgs = {
  userInput: UserInput;
};


export type MutationUpdateUserInfoArgs = {
  userInfoInput: UserInfoInput;
};


export type MutationVerifyPhoneOtpArgs = {
  phoneOtpInput: PhoneOtpInput;
};

export type OtpResult = {
  __typename?: 'OtpResult';
  jwt?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type OtpResultAll = {
  __typename?: 'OtpResultAll';
  expiresIn?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  otp?: Maybe<Scalars['Int']['output']>;
  phone: Scalars['Float']['output'];
};

export type PhoneOtpInput = {
  expiresIn?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  otp?: InputMaybe<Scalars['Int']['input']>;
  phone: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAppSetting?: Maybe<AppSettingResult>;
  getContactUs?: Maybe<Array<ContactUsResult>>;
  getPhoneOtp?: Maybe<Array<Maybe<OtpResultAll>>>;
  getRole?: Maybe<Array<Maybe<RoleResult>>>;
  getSeetu?: Maybe<Array<Maybe<SeetuResult>>>;
  getSeetuById: SeetuResult;
  getUser?: Maybe<Array<Maybe<UserResult>>>;
  getUserById: UserResult;
  getUserByPhone?: Maybe<UserResult>;
  getUserInfo?: Maybe<Array<Maybe<UserInfoResult>>>;
  getUserInfoById?: Maybe<UserInfoResult>;
};


export type QueryGetSeetuByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByPhoneArgs = {
  phone: Scalars['String']['input'];
};


export type QueryGetUserInfoByIdArgs = {
  id: Scalars['ID']['input'];
};

export type RoleInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: RoleType;
};

export type RoleResult = {
  __typename?: 'RoleResult';
  id: Scalars['ID']['output'];
  name: RoleType;
};

export enum RoleType {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  NORMAL = 'NORMAL',
  SUPERADMIN = 'SUPERADMIN'
}

export type SeetuInput = {
  amountPaid?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['String']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  deletedDate?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SeetuResult = {
  __typename?: 'SeetuResult';
  amountPaid: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  createdDate: Scalars['String']['output'];
  deletedBy: Scalars['String']['output'];
  deletedDate: Scalars['String']['output'];
  dueDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedBy: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserInfoInput = {
  adress?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  isKycDone?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UserInfoResult = {
  __typename?: 'UserInfoResult';
  adress?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isKycDone?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UserInput = {
  blockedBy?: InputMaybe<Scalars['String']['input']>;
  blockedDate?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['String']['input']>;
  deletedBy?: InputMaybe<Scalars['String']['input']>;
  deletedDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['String']['input']>;
};

export type UserResult = {
  __typename?: 'UserResult';
  blockedBy?: Maybe<Scalars['String']['output']>;
  blockedDate?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['String']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  deletedDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  phoneNo?: Maybe<Scalars['String']['output']>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  role?: Maybe<RoleResult>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['String']['output']>;
  userInfo?: Maybe<UserInfoResult>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AppSettingInput: AppSettingInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  AppSettingResult: ResolverTypeWrapper<AppSettingResult>;
  ContactUsInput: ContactUsInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ContactUsResult: ResolverTypeWrapper<ContactUsResult>;
  Mutation: ResolverTypeWrapper<{}>;
  OtpResult: ResolverTypeWrapper<OtpResult>;
  OtpResultAll: ResolverTypeWrapper<OtpResultAll>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PhoneOtpInput: PhoneOtpInput;
  Query: ResolverTypeWrapper<{}>;
  RoleInput: RoleInput;
  RoleResult: ResolverTypeWrapper<RoleResult>;
  RoleType: RoleType;
  SeetuInput: SeetuInput;
  SeetuResult: ResolverTypeWrapper<SeetuResult>;
  UserInfoInput: UserInfoInput;
  UserInfoResult: ResolverTypeWrapper<UserInfoResult>;
  UserInput: UserInput;
  UserResult: ResolverTypeWrapper<UserResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AppSettingInput: AppSettingInput;
  String: Scalars['String']['output'];
  ID: Scalars['ID']['output'];
  AppSettingResult: AppSettingResult;
  ContactUsInput: ContactUsInput;
  Boolean: Scalars['Boolean']['output'];
  ContactUsResult: ContactUsResult;
  Mutation: {};
  OtpResult: OtpResult;
  OtpResultAll: OtpResultAll;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  PhoneOtpInput: PhoneOtpInput;
  Query: {};
  RoleInput: RoleInput;
  RoleResult: RoleResult;
  SeetuInput: SeetuInput;
  SeetuResult: SeetuResult;
  UserInfoInput: UserInfoInput;
  UserInfoResult: UserInfoResult;
  UserInput: UserInput;
  UserResult: UserResult;
};

export type AppSettingResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppSettingResult'] = ResolversParentTypes['AppSettingResult']> = {
  appName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supportEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactUsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactUsResult'] = ResolversParentTypes['ContactUsResult']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAppSetting?: Resolver<ResolversTypes['AppSettingResult'], ParentType, ContextType, RequireFields<MutationCreateAppSettingArgs, 'appSettingInput'>>;
  createContactUs?: Resolver<ResolversTypes['ContactUsResult'], ParentType, ContextType, RequireFields<MutationCreateContactUsArgs, 'contactUsInput'>>;
  createRole?: Resolver<ResolversTypes['RoleResult'], ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'roleInput'>>;
  createSeetu?: Resolver<ResolversTypes['SeetuResult'], ParentType, ContextType, RequireFields<MutationCreateSeetuArgs, 'seetuInput'>>;
  createUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'userInput'>>;
  createUserInfo?: Resolver<ResolversTypes['UserInfoResult'], ParentType, ContextType, RequireFields<MutationCreateUserInfoArgs, 'userInfoInput'>>;
  deleteContactUs?: Resolver<ResolversTypes['ContactUsResult'], ParentType, ContextType, RequireFields<MutationDeleteContactUsArgs, 'id'>>;
  deletePhoneOtp?: Resolver<ResolversTypes['OtpResult'], ParentType, ContextType, RequireFields<MutationDeletePhoneOtpArgs, 'id'>>;
  deleteRole?: Resolver<ResolversTypes['RoleResult'], ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteSeetu?: Resolver<ResolversTypes['SeetuResult'], ParentType, ContextType, RequireFields<MutationDeleteSeetuArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteUserInfo?: Resolver<ResolversTypes['UserInfoResult'], ParentType, ContextType, RequireFields<MutationDeleteUserInfoArgs, 'id'>>;
  sendPhoneOtp?: Resolver<ResolversTypes['OtpResult'], ParentType, ContextType, RequireFields<MutationSendPhoneOtpArgs, 'phoneOtpInput'>>;
  updateAppSetting?: Resolver<ResolversTypes['AppSettingResult'], ParentType, ContextType, RequireFields<MutationUpdateAppSettingArgs, 'appSettingInput'>>;
  updateRole?: Resolver<ResolversTypes['RoleResult'], ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'roleInput'>>;
  updateSeetu?: Resolver<ResolversTypes['SeetuResult'], ParentType, ContextType, RequireFields<MutationUpdateSeetuArgs, 'seetuInput'>>;
  updateUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'userInput'>>;
  updateUserInfo?: Resolver<ResolversTypes['UserInfoResult'], ParentType, ContextType, RequireFields<MutationUpdateUserInfoArgs, 'userInfoInput'>>;
  verifyPhoneOtp?: Resolver<ResolversTypes['OtpResult'], ParentType, ContextType, RequireFields<MutationVerifyPhoneOtpArgs, 'phoneOtpInput'>>;
};

export type OtpResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['OtpResult'] = ResolversParentTypes['OtpResult']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OtpResultAllResolvers<ContextType = any, ParentType extends ResolversParentTypes['OtpResultAll'] = ResolversParentTypes['OtpResultAll']> = {
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  otp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAppSetting?: Resolver<Maybe<ResolversTypes['AppSettingResult']>, ParentType, ContextType>;
  getContactUs?: Resolver<Maybe<Array<ResolversTypes['ContactUsResult']>>, ParentType, ContextType>;
  getPhoneOtp?: Resolver<Maybe<Array<Maybe<ResolversTypes['OtpResultAll']>>>, ParentType, ContextType>;
  getRole?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleResult']>>>, ParentType, ContextType>;
  getSeetu?: Resolver<Maybe<Array<Maybe<ResolversTypes['SeetuResult']>>>, ParentType, ContextType>;
  getSeetuById?: Resolver<ResolversTypes['SeetuResult'], ParentType, ContextType, RequireFields<QueryGetSeetuByIdArgs, 'id'>>;
  getUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserResult']>>>, ParentType, ContextType>;
  getUserById?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  getUserByPhone?: Resolver<Maybe<ResolversTypes['UserResult']>, ParentType, ContextType, RequireFields<QueryGetUserByPhoneArgs, 'phone'>>;
  getUserInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserInfoResult']>>>, ParentType, ContextType>;
  getUserInfoById?: Resolver<Maybe<ResolversTypes['UserInfoResult']>, ParentType, ContextType, RequireFields<QueryGetUserInfoByIdArgs, 'id'>>;
};

export type RoleResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleResult'] = ResolversParentTypes['RoleResult']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['RoleType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeetuResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeetuResult'] = ResolversParentTypes['SeetuResult']> = {
  amountPaid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deletedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deletedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfoResult'] = ResolversParentTypes['UserInfoResult']> = {
  adress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isKycDone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = {
  blockedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  phoneNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referenceNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['RoleResult']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfoResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AppSettingResult?: AppSettingResultResolvers<ContextType>;
  ContactUsResult?: ContactUsResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OtpResult?: OtpResultResolvers<ContextType>;
  OtpResultAll?: OtpResultAllResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoleResult?: RoleResultResolvers<ContextType>;
  SeetuResult?: SeetuResultResolvers<ContextType>;
  UserInfoResult?: UserInfoResultResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
};


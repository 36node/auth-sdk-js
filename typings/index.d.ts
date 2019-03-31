export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  namespace: SDK.NamespaceAPI;
  session: SDK.SessionAPI;
  user: SDK.UserAPI;
  invitation: SDK.InvitationAPI;
  validation: SDK.ValidationAPI;
  qiniu: SDK.QiniuAPI;
  provider: SDK.ProviderAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface NamespaceAPI {
    /**
     * Create namespace
     */
    createNamespace(req: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
     * List namespaces
     */
    listNamespaces(req: ListNamespacesRequest): Promise<ListNamespacesResponse>;
    /**
     * Get namespace by id
     */
    getNamespace(req: GetNamespaceRequest): Promise<GetNamespaceResponse>;
    /**
     * Update namespace
     */
    updateNamespace(req: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse>;
    /**
     * delete namespace
     */
    deleteNamespace(req: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
  }
  export interface SessionAPI {
    /**
     * Create session
     */
    createSession(req: CreateSessionRequest): Promise<CreateSessionResponse>;
    /**
     * Get session and auto refresh it if need
     */
    getSession(req: GetSessionRequest): Promise<GetSessionResponse>;
    /**
     * Deletes a session
     */
    deleteSession(req: DeleteSessionRequest): Promise<DeleteSessionResponse>;
  }
  export interface UserAPI {
    /**
     * Create user
     */
    createUser(req: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * List users
     */
    listUsers(req: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * Get user by id
     */
    getUser(req: GetUserRequest): Promise<GetUserResponse>;
    /**
     * Update user
     */
    updateUser(req: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * delete user
     */
    deleteUser(req: DeleteUserRequest): Promise<DeleteUserResponse>;
  }
  export interface InvitationAPI {
    /**
     * Create invitation 可以用于发送邀请码
     */
    createInvitation(req: CreateInvitationRequest): Promise<CreateInvitationResponse>;
    /**
     * List invitations
     */
    listInvitations(req: ListInvitationsRequest): Promise<ListInvitationsResponse>;
    /**
     * bulk upsert invitations
     */
    updateInvitations(req: UpdateInvitationsRequest): Promise<UpdateInvitationsResponse>;
    /**
     * Get invitation by id
     */
    getInvitation(req: GetInvitationRequest): Promise<GetInvitationResponse>;
    /**
     * Update invitation
     */
    updateInvitation(req: UpdateInvitationRequest): Promise<UpdateInvitationResponse>;
    /**
     * delete invitation
     */
    deleteInvitation(req: DeleteInvitationRequest): Promise<DeleteInvitationResponse>;
  }
  export interface ValidationAPI {
    /**
     * Create validation 发送验证码
     */
    createValidation(req: CreateValidationRequest): Promise<CreateValidationResponse>;
  }
  export interface QiniuAPI {
    /**
     * get qiniu token for a specific bucket
     */
    getQiniuToken(req: GetQiniuTokenRequest): Promise<GetQiniuTokenResponse>;
  }
  export interface ProviderAPI {
    /**
     * Create provider
     */
    createProvider(req: CreateProviderRequest): Promise<CreateProviderResponse>;
    /**
     * List providers
     */
    listProviders(req: ListProvidersRequest): Promise<ListProvidersResponse>;
    /**
     * Get provider by id
     */
    getProvider(req: GetProviderRequest): Promise<GetProviderResponse>;
    /**
     * Update provider
     */
    updateProvider(req: UpdateProviderRequest): Promise<UpdateProviderResponse>;
    /**
     * delete provider
     */
    deleteProvider(req: DeleteProviderRequest): Promise<DeleteProviderResponse>;
  }

  type CreateNamespaceRequest = {
    body: Namespace;
  };

  type CreateNamespaceResponse = {
    body: Namespace;
  };

  type ListNamespacesRequest = {
    query: {
      limit?: number;
      offset?: string;
      select?: string;
    };
  };

  type ListNamespacesResponse = {
    body: Array<Namespace>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetNamespaceRequest = {
    namespaceId: string;
  };

  type GetNamespaceResponse = {
    body: Namespace;
  };

  type UpdateNamespaceRequest = {
    namespaceId: string;
    body: Namespace;
  };

  type UpdateNamespaceResponse = {
    body: Namespace;
  };

  type DeleteNamespaceRequest = {
    namespaceId: string;
  };

  type CreateSessionRequest = {
    body: CreateSessionBody;
  };

  type CreateSessionResponse = {
    body: Session;
  };

  type GetSessionRequest = {
    sessionId: string;
  };

  type GetSessionResponse = {
    body: Session;
  };

  type DeleteSessionRequest = {
    sessionId: string;
  };

  type CreateUserRequest = {
    body: User;
  };

  type CreateUserResponse = {
    body: User;
  };

  type ListUsersRequest = {
    query: {
      limit?: number;
      offset?: string;
      select?: string;

      filter: {
        ns?: string;
        q?: string;
      };
    };
  };

  type ListUsersResponse = {
    body: Array<User>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetUserRequest = {
    userId: string;
  };

  type GetUserResponse = {
    body: User;
  };

  type UpdateUserRequest = {
    userId: string;
    body: User;
  };

  type UpdateUserResponse = {
    body: User;
  };

  type DeleteUserRequest = {
    userId: string;
  };

  type CreateInvitationRequest = {
    body: CreateInvitationBody;
  };

  type CreateInvitationResponse = {
    body: Invitation;
  };

  type ListInvitationsRequest = {
    query: {
      limit?: number;
      offset?: string;

      filter: {
        ns?: string;
        sub?: string;
        code?: string;
        phone?: string;
        used?: string;
      };
    };
  };

  type ListInvitationsResponse = {
    body: Array<Invitation>;
    headers: {
      xTotalCount: string;
    };
  };

  type UpdateInvitationsRequest = {
    body: Array<UpdateInvitationsBody>;
  };

  type UpdateInvitationsResponse = {
    body: Array<Invitation>;
  };

  type GetInvitationRequest = {
    invitationId: string;
  };

  type GetInvitationResponse = {
    body: Invitation;
  };

  type UpdateInvitationRequest = {
    invitationId: string;
    body: UpdateInvitationBody;
  };

  type UpdateInvitationResponse = {
    body: Invitation;
  };

  type DeleteInvitationRequest = {
    invitationId: string;
  };

  type CreateValidationRequest = {
    body: CreateValidationBody;
  };

  type CreateValidationResponse = {
    body: Validation;
  };

  type GetQiniuTokenRequest = {
    bucket: string;

    query: {
      filter: {
        expires?: number;
      };
    };
  };

  type GetQiniuTokenResponse = {
    body: QiniuToken;
  };

  type CreateProviderRequest = {
    body: Provider;
  };

  type CreateProviderResponse = {
    body: Provider;
  };

  type ListProvidersRequest = {
    query: {
      limit?: number;
      offset?: string;
      select?: string;
    };
  };

  type ListProvidersResponse = {
    body: Array<Provider>;
    headers: {
      xTotalCount: string;
    };
  };

  type GetProviderRequest = {
    providerId: string;
  };

  type GetProviderResponse = {
    body: Provider;
  };

  type UpdateProviderRequest = {
    providerId: string;
    body: Provider;
  };

  type UpdateProviderResponse = {
    body: Provider;
  };

  type DeleteProviderRequest = {
    providerId: string;
  };

  type User = {
    createdAt: string;
    updatedAt: string;
    id: string;
    active: boolean;
    expireAt: string;
    ns: Array<string>;
    source: string;
    avatar: string;
    birthdate: string;
    city: string;
    data: {};
    country: string;
    email: string;
    gender: string;
    language: string;
    name: string;
    nickname: string;
    phone: string;
    province: string;
    roles: Array<{
      ns: string;
      name: string;
    }>;
  };

  type Session = {
    createdAt: string;
    updatedAt: string;
    id: string;
    client: string;
    device: string;
    ns: string;
    provider: string;
    expireAt: string;
    token: string;
    user: {
      createdAt: string;
      updatedAt: string;
      id: string;
      active: boolean;
      expireAt: string;
      ns: Array<string>;
      source: string;
      avatar: string;
      birthdate: string;
      city: string;
      data: {};
      country: string;
      email: string;
      gender: string;
      language: string;
      name: string;
      nickname: string;
      phone: string;
      province: string;
      roles: Array<{
        ns: string;
        name: string;
      }>;
    };
  };

  type CreateSessionBody = {
    client: string;
    device: string;
    provider: string;
    username: string;
    password: string;
    code: string;
  };

  type Invitation = {
    id: string;
    ns: string;
    createdAt: string;
    code: string;
    email: string;
    phone: string;
    sub: string;
    expireAt: string;
    period: number;
    until: string;
    used: boolean;
    usedAt: string;
  };

  type UpdateInvitationBody = {
    until: string;
    period: number;
  };

  type UpdateInvitationsBody = {
    id: string;
    code: string;
    until: string;
    period: number;
  };

  type CreateInvitationBody = {
    until: string;
    period: number;
    email: string;
    phone: string;
    sub: string;
  };

  type Validation = {
    id: string;
    ns: string;
    createdAt: string;
    code: string;
    email: string;
    phone: string;
    expireAt: string;
    used: boolean;
    usedAt: string;
  };

  type CreateValidationBody = {
    phone: string;
    email: string;
  };

  type Namespace = {
    data: {};
    id: string;
    name: string;
    parent: string;
    public: boolean;
    userActive: boolean;
  };

  type Provider = {
    name: string;
    ns: string;
    appId: string;
    appSecret: string;
    update: boolean;
  };

  type QiniuToken = {
    token: string;
    expires: number;
    expiredAt: string;
  };

  type Err = {
    code: string;
    message: string;
  };
}

export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  namespace: SDK.NamespaceAPI;
  session: SDK.SessionAPI;
  validation: SDK.ValidationAPI;
  provider: SDK.ProviderAPI;
  user: SDK.UserAPI;
  code: SDK.CodeAPI;
  app: SDK.AppAPI;
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
    /**
     * Get register onfig by ns id
     */
    getConfig(req: GetConfigRequest): Promise<GetConfigResponse>;
  }
  export interface SessionAPI {
    /**
     * Create session
     */
    createSession(req: CreateSessionRequest): Promise<CreateSessionResponse>;
    /**
     * List sessions
     */
    listSessions(req: ListSessionsRequest): Promise<ListSessionsResponse>;
    /**
     * Get session and auto refresh it if need
     */
    getSession(req: GetSessionRequest): Promise<GetSessionResponse>;
    /**
     * Deletes a session
     */
    deleteSession(req: DeleteSessionRequest): Promise<DeleteSessionResponse>;
    /**
     * Create temp token
     */
    createToken(req: CreateTokenRequest): Promise<CreateTokenResponse>;
    /**
     * bind user
     */
    bindUser(req: BindUserRequest): Promise<BindUserResponse>;
  }
  export interface ValidationAPI {
    /**
     * Create validation 发送验证码
     */
    createValidation(req: CreateValidationRequest): Promise<CreateValidationResponse>;
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
    /**
     * register user
     */
    registerUser(req: RegisterUserRequest): Promise<RegisterUserResponse>;
  }
  export interface CodeAPI {
    /**
     * Create code
     */
    createCode(req: CreateCodeRequest): Promise<CreateCodeResponse>;
  }
  export interface AppAPI {
    /**
     * Create app
     */
    createApp(req: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * List apps
     */
    listApps(req: ListAppsRequest): Promise<ListAppsResponse>;
    /**
     * Get app by id
     */
    getApp(req: GetAppRequest): Promise<GetAppResponse>;
    /**
     * Update app
     */
    updateApp(req: UpdateAppRequest): Promise<UpdateAppResponse>;
    /**
     * delete app
     */
    deleteApp(req: DeleteAppRequest): Promise<DeleteAppResponse>;
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
      sort?: string;
      select?: string;

      filter: {
        id: {
          $regex?: string;
        };
      };
    };
  };

  type ListNamespacesResponse = {
    body: [Namespace];
    headers: {
      xTotalCount: number;
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
    body: NamespaceDoc;
  };

  type UpdateNamespaceResponse = {
    body: Namespace;
  };

  type DeleteNamespaceRequest = {
    namespaceId: string;
  };

  type GetConfigRequest = {
    namespaceId: string;
  };

  type GetConfigResponse = {
    body: RegisterConfig;
  };

  type CreateSessionRequest = {
    body: CreateSessionBody;
  };

  type CreateSessionResponse = {
    body: Session;
  };

  type ListSessionsRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      populate?: string;
      select?: string;

      filter: {
        user?: string;
      };
    };
  };

  type ListSessionsResponse = {
    body: [Session];
    headers: {
      xTotalCount: string;
    };
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

  type CreateTokenRequest = {
    body: CreateTokenBody;
  };

  type CreateTokenResponse = {
    body: Token;
  };

  type BindUserRequest = {
    body: CreateBindUserBody;
  };

  type BindUserResponse = {
    body: Session;
  };

  type CreateValidationRequest = {
    body: CreateValidationBody;
  };

  type CreateValidationResponse = {
    body: Validation;
  };

  type CreateProviderRequest = {
    body: CreateProviderBody;
  };

  type CreateProviderResponse = {
    body: Provider;
  };

  type ListProvidersRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        ns?: string;
      };
    };
  };

  type ListProvidersResponse = {
    body: [Provider];
    headers: {
      xTotalCount: number;
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
    body: ProviderDoc;
  };

  type UpdateProviderResponse = {
    body: Provider;
  };

  type DeleteProviderRequest = {
    providerId: string;
  };

  type CreateUserRequest = {
    body: CreateUserBody;
  };

  type CreateUserResponse = {
    body: User;
  };

  type ListUsersRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        ns?:
          | {
              $regex: string;
            }
          | string;
      };
    };
  };

  type ListUsersResponse = {
    body: [User];
    headers: {
      xTotalCount: number;
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
    body: UpdateUserBody;
  };

  type UpdateUserResponse = {
    body: User;
  };

  type DeleteUserRequest = {
    userId: string;
  };

  type RegisterUserRequest = {
    body: RegisterUserBody;
  };

  type RegisterUserResponse = {
    body: User;
  };

  type CreateCodeRequest = {
    body: CreateCodeBody;
  };

  type CreateCodeResponse = {
    body: Code;
  };

  type CreateAppRequest = {
    body: CreateAppBody;
  };

  type CreateAppResponse = {
    body: App;
  };

  type ListAppsRequest = {
    query: {
      limit?: number;
      offset?: string;
      sort?: string;
      select?: string;

      filter: {
        ns?: string;
      };
    };
  };

  type ListAppsResponse = {
    body: [App];
    headers: {
      xTotalCount: number;
    };
  };

  type GetAppRequest = {
    appId: string;
  };

  type GetAppResponse = {
    body: App;
  };

  type UpdateAppRequest = {
    appId: string;
    body: AppDoc;
  };

  type UpdateAppResponse = {
    body: App;
  };

  type DeleteAppRequest = {
    appId: string;
  };

  type UserDoc = {
    rootNs: string;
    ns: string;
    username: string;
    phone: string;
    email: string;
    roles: [string];
    expireAt: string;
    active: boolean;
    source: string;
    avatar: string;
    name: string;
    birthday: string;
    gender: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    language: string;
    country: string;
    province: string;
    city: string;
    data: string;
  };
  type User = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    rootNs: string;
    ns: string;
    username: string;
    phone: string;
    email: string;
    roles: [string];
    expireAt: string;
    active: boolean;
    source: string;
    avatar: string;
    name: string;
    birthday: string;
    gender: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    language: string;
    country: string;
    province: string;
    city: string;
    data: string;
  };
  type CreateUserBody = {
    password: string;
    rootNs: string;
    ns: string;
    username: string;
    phone: string;
    email: string;
    roles: [string];
    expireAt: string;
    active: boolean;
    source: string;
    avatar: string;
    name: string;
    birthday: string;
    gender: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    language: string;
    country: string;
    province: string;
    city: string;
    data: string;
  };
  type RegisterUserBody = {
    rootNs: string;
    ns: string;
    password: string;
    code: string;
    username: string;
    phone: string;
    email: string;
    roles: [string];
    expireAt: string;
    active: boolean;
    source: string;
    avatar: string;
    name: string;
    birthday: string;
    gender: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    language: string;
    country: string;
    province: string;
    city: string;
    data: string;
  };
  type UpdateUserBody = {
    password: string;
    code: string;
    rootNs: string;
    ns: string;
    username: string;
    phone: string;
    email: string;
    roles: [string];
    expireAt: string;
    active: boolean;
    source: string;
    avatar: string;
    name: string;
    birthday: string;
    gender: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    language: string;
    country: string;
    province: string;
    city: string;
    data: string;
  };
  type SessionDoc = {
    expireAt: string;
    rootNs: string;
    ns: string;
    provider: string;
    method: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    roles: [string];
    user: undefined;
    profile: {};
    type: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
  };
  type Session = {
    token: string;
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    expireAt: string;
    rootNs: string;
    ns: string;
    provider: string;
    method: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    roles: [string];
    user: undefined;
    profile: {};
    type: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
  };
  type CreateSessionBody = {
    provider: string;
    username: string;
    password: string;
    phone: string;
    email: string;
    code: string;
    encryptedData: string;
    iv: string;
    type: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
  };
  type CreateBindUserBody = {
    provider: string;
    username: string;
    password: string;
  };
  type ValidationDoc = {
    rootNs: string;
    email: string;
    phone: string;
    expireAt: string;
    used: boolean;
    usedAt: string;
    type: "PHONE" | "EMAIL";
    kind: "LOGIN" | "REGISTER" | "UPDATE";
  };
  type Validation = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    rootNs: string;
    email: string;
    phone: string;
    expireAt: string;
    used: boolean;
    usedAt: string;
    type: "PHONE" | "EMAIL";
    kind: "LOGIN" | "REGISTER" | "UPDATE";
  };
  type CreateValidationBody = {
    rootNs: string;
    phone: string;
    email: string;
    kind: "LOGIN" | "REGISTER" | "UPDATE";
  };
  type ProviderDoc = {
    name: string;
    type: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    ns: string;
    appId: string;
    appSecret: string;
    clientId: string;
    update: boolean;
  };
  type Provider = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    name: string;
    type: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    ns: string;
    appId: string;
    appSecret: string;
    clientId: string;
    update: boolean;
  };
  type CreateProviderBody = {
    ns: string;
    name: string;
    type: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    appId: string;
    appSecret: string;
    clientId: string;
    update: boolean;
  };
  type SmsConfig = {
    expire: number;
    tplId: string;
    sign: string;
  };
  type EmailConfig = {
    expire: number;
    from: string;
    subject: string;
    text: string;
    html: string;
  };
  type RegisterConfig = {
    username: "MUST" | "NOMUST";
    phoneOrEmail: "PHONE" | "EMAIL" | "ALL" | "NONE";
    realName: "MUST" | "NOMUST" | "NONEED";
    company: "MUST" | "NOMUST" | "NONEED";
    sign: "MUST" | "NOMUST" | "NONEED";
    data: string;
  };
  type NamespaceDoc = {
    id: string;
    key: string;
    name: string;
    parent: string;
    public: boolean;
    root: boolean;
    userActive: boolean;
    data: string;
    sms: {
      expire: number;
      tplId: string;
      sign: string;
    };
    email: {
      expire: number;
      from: string;
      subject: string;
      text: string;
      html: string;
    };
    register: {
      username: "MUST" | "NOMUST";
      phoneOrEmail: "PHONE" | "EMAIL" | "ALL" | "NONE";
      realName: "MUST" | "NOMUST" | "NONEED";
      company: "MUST" | "NOMUST" | "NONEED";
      sign: "MUST" | "NOMUST" | "NONEED";
      data: string;
    };
  };
  type Namespace = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    key: string;
    name: string;
    parent: string;
    public: boolean;
    root: boolean;
    userActive: boolean;
    data: string;
    sms: {
      expire: number;
      tplId: string;
      sign: string;
    };
    email: {
      expire: number;
      from: string;
      subject: string;
      text: string;
      html: string;
    };
    register: {
      username: "MUST" | "NOMUST";
      phoneOrEmail: "PHONE" | "EMAIL" | "ALL" | "NONE";
      realName: "MUST" | "NOMUST" | "NONEED";
      company: "MUST" | "NOMUST" | "NONEED";
      sign: "MUST" | "NOMUST" | "NONEED";
      data: string;
    };
  };
  type CreateNamespaceBody = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    key: string;
    name: string;
    parent: string;
    public: boolean;
    root: boolean;
    userActive: boolean;
    data: string;
    sms: {
      expire: number;
      tplId: string;
      sign: string;
    };
    email: {
      expire: number;
      from: string;
      subject: string;
      text: string;
      html: string;
    };
    register: {
      username: "MUST" | "NOMUST";
      phoneOrEmail: "PHONE" | "EMAIL" | "ALL" | "NONE";
      realName: "MUST" | "NOMUST" | "NONEED";
      company: "MUST" | "NOMUST" | "NONEED";
      sign: "MUST" | "NOMUST" | "NONEED";
      data: string;
    };
  };
  type CodeDoc = {
    code: string;
    expireAt: string;
    ns: string;
    user: string;
  };
  type Code = {
    redirectUri: string;
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    code: string;
    expireAt: string;
    ns: string;
    user: string;
  };
  type CreateCodeBody = {
    session: string;
    app: string;
  };
  type Token = {
    token: string;
  };
  type CreateTokenBody = {
    rootNs: string;
    username: string;
    password: string;
  };
  type AppDoc = {
    ns: string;
    name: string;
    type: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    redirectUri: string;
  };
  type App = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
    ns: string;
    name: string;
    type: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    redirectUri: string;
  };
  type CreateAppBody = {
    ns: string;
    name: string;
    redirectUri: string;
    type: "WEB" | "ANDROID" | "IOS" | "WXAPP";
  };
  type MongoDefault = {
    id: string;
    updateAt: string;
    updateBy: string;
    createAt: string;
    createBy: string;
  };
  type Err = {
    code: string;
    type: string;
    message: boolean;
    name: string;
    details: [
      {
        keyword: string;
        message: string;
        path: string;
        value: string;
      }
    ];
  };
}

declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  namespace: NamespaceAPI;
  session: SessionAPI;
  validation: ValidationAPI;
  provider: ProviderAPI;
  user: UserAPI;
  code: CodeAPI;
  app: AppAPI;
}

declare global {
  export interface Options {
    base?: string;
    token?: string | (() => string);
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

  export interface CreateNamespaceRequest {
    body: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface CreateNamespaceResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListNamespacesRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      id_like?: string;
    };
  }
  export interface ListNamespacesResponse {
    content?: ({
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count"?: number;
    };
  }
  export interface GetNamespaceRequest {
    namespaceId: string;
  }
  export interface GetNamespaceResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNamespaceRequest {
    namespaceId: string;
    body: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    };
  }
  export interface UpdateNamespaceResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 可以用于排序以及英文名等
       */
      key?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 是否公开的空间，如果是公开的话，允许用户自行注册
       */
      public?: boolean;
      /**
       * 是否为根ns
       */
      root?: boolean;
      /**
       * 新增用户是否自动激活，缺省是 true
       */
      userActive?: boolean;
      /**
       * 用户自定义数据
       */
      data?: string;
      /**
       * 发送短信验证码的配置
       */
      sms?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 验证码模版 id
         */
        tplId?: string;
        /**
         * 验证码签名
         */
        sign?: string;
      };
      /**
       * 发送邮箱验证码的配置
       */
      email?: {
        /**
         * 验证码过期时间
         */
        expire?: number;
        /**
         * 发件人
         */
        from?: string;
        /**
         * 标题
         */
        subject?: string;
        text?: string;
        /**
         * 邮件内容
         */
        html?: string;
      };
      /**
       * ns 注册配置
       */
      register?: {
        /**
         * 是否配置 用户名
         */
        username?: "MUST" | "NOMUST";
        /**
         * 是否配置 邮箱
         */
        phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
        /**
         * 是否配置 真实姓名
         */
        realName?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 公司
         */
        company?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 是否配置 个人签名
         */
        sign?: "MUST" | "NOMUST" | "NONEED";
        /**
         * 自定义配置
         */
        data?: string;
      };
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteNamespaceRequest {
    namespaceId: string;
  }
  export interface GetConfigRequest {
    namespaceId: string;
  }
  export interface GetConfigResponse {
    /**
     * ns 其他配置
     */
    content?: {
      /**
       * 是否配置 用户名
       */
      username?: "MUST" | "NOMUST";
      /**
       * 是否配置 邮箱
       */
      phoneOrEmail?: "PHONE" | "EMAIL" | "ALL" | "NONE";
      /**
       * 是否配置 真实姓名
       */
      realName?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 公司
       */
      company?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 个人签名
       */
      sign?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 自定义配置
       */
      data?: string;
    };
  }
  export interface CreateSessionRequest {
    body: {
      /**
       * 验证方式 ( provider id )
       */
      provider: string;
      /**
       * 用户名/邮箱/手机号
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 手机号 用于手机号登陆
       */
      phone?: string;
      /**
       * 邮箱 用于忘记密码
       */
      email?: string;
      /**
       * 各种授权code
       */
      code?: string;
      /**
       * 微信小程序登陆时的用户加密数据
       */
      encryptedData?: string;
      /**
       * 微信小程序登陆时的解密iv
       */
      iv?: string;
      /**
       * session 类型
       */
      type?: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
    };
  }
  export interface CreateSessionResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to root namespaces
       */
      rootNs?: string;
      /**
       * session belongs to namespaces
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      method?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 角色
       */
      roles?: string[];
      user?: {
        /**
         * 所在的根ns
         */
        rootNs?: string;
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 是否激活的用户
         */
        active?: boolean;
        /**
         * 用户来源
         */
        source?: string;
        /**
         * 用户头像
         */
        avatar?: string;
        /**
         * 用户姓名
         */
        name?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 用户所用语言
         */
        language?: string;
        /**
         * 所在国家
         */
        country?: string;
        /**
         * 所在省
         */
        province?: string;
        /**
         * 所在城市
         */
        city?: string;
        /**
         * 第三方赋值的数据
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * an object of login user profile
       */
      profile?: {};
      /**
       * session 类型
       */
      type?: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * token
       */
      token: string;
    };
  }
  export interface ListSessionsRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      _populate?: string;
      user?: string;
    };
  }
  export interface ListSessionsResponse {
    content?: ({
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to root namespaces
       */
      rootNs?: string;
      /**
       * session belongs to namespaces
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      method?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 角色
       */
      roles?: string[];
      user?: {
        /**
         * 所在的根ns
         */
        rootNs?: string;
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 是否激活的用户
         */
        active?: boolean;
        /**
         * 用户来源
         */
        source?: string;
        /**
         * 用户头像
         */
        avatar?: string;
        /**
         * 用户姓名
         */
        name?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 用户所用语言
         */
        language?: string;
        /**
         * 所在国家
         */
        country?: string;
        /**
         * 所在省
         */
        province?: string;
        /**
         * 所在城市
         */
        city?: string;
        /**
         * 第三方赋值的数据
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * an object of login user profile
       */
      profile?: {};
      /**
       * session 类型
       */
      type?: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * token
       */
      token: string;
    })[];
    headers?: {
      "X-Total-Count"?: string;
    };
  }
  export interface GetSessionRequest {
    sessionId: string;
  }
  export interface GetSessionResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to root namespaces
       */
      rootNs?: string;
      /**
       * session belongs to namespaces
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      method?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 角色
       */
      roles?: string[];
      user?: {
        /**
         * 所在的根ns
         */
        rootNs?: string;
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 是否激活的用户
         */
        active?: boolean;
        /**
         * 用户来源
         */
        source?: string;
        /**
         * 用户头像
         */
        avatar?: string;
        /**
         * 用户姓名
         */
        name?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 用户所用语言
         */
        language?: string;
        /**
         * 所在国家
         */
        country?: string;
        /**
         * 所在省
         */
        province?: string;
        /**
         * 所在城市
         */
        city?: string;
        /**
         * 第三方赋值的数据
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * an object of login user profile
       */
      profile?: {};
      /**
       * session 类型
       */
      type?: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * token
       */
      token: string;
    };
  }
  export interface DeleteSessionRequest {
    sessionId: string;
  }
  export interface CreateTokenRequest {
    body: {
      /**
       * rootNs
       */
      rootNs?: string;
      /**
       * 用户名/邮箱/手机号
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
    };
  }
  export interface CreateTokenResponse {
    content?: {
      /**
       * temp token
       */
      token: string;
    };
  }
  export interface BindUserRequest {
    body: {
      /**
       * 验证方式 ( provider id )
       */
      provider: string;
      /**
       * 用户名/邮箱/手机号
       */
      username: string;
      /**
       * 密码
       */
      password: string;
    };
  }
  export interface BindUserResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to root namespaces
       */
      rootNs?: string;
      /**
       * session belongs to namespaces
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      method?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 角色
       */
      roles?: string[];
      user?: {
        /**
         * 所在的根ns
         */
        rootNs?: string;
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 是否激活的用户
         */
        active?: boolean;
        /**
         * 用户来源
         */
        source?: string;
        /**
         * 用户头像
         */
        avatar?: string;
        /**
         * 用户姓名
         */
        name?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 用户所用语言
         */
        language?: string;
        /**
         * 所在国家
         */
        country?: string;
        /**
         * 所在省
         */
        province?: string;
        /**
         * 所在城市
         */
        city?: string;
        /**
         * 第三方赋值的数据
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * an object of login user profile
       */
      profile?: {};
      /**
       * session 类型
       */
      type?: "DEFAULT" | "LOGIN" | "TEST" | "TEMP";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * token
       */
      token: string;
    };
  }
  export interface CreateValidationRequest {
    /**
     * 创建验证码需要的参数
     */
    body: {
      rootNs: string;
      phone?: string;
      email?: string;
      kind: "LOGIN" | "REGISTER" | "UPDATE";
    };
  }
  export interface CreateValidationResponse {
    content?: {
      /**
       * 所属的 namespace
       */
      rootNs?: string;
      email?: string;
      phone?: string;
      /**
       * 验证码过期时间
       */
      expireAt?: Date;
      /**
       * 是否已经使用
       */
      used?: boolean;
      /**
       * 验证码使用时间
       */
      usedAt?: Date;
      /**
       * 验证码属于手机或者邮箱
       */
      type?: "PHONE" | "EMAIL";
      /**
       * 验证码属于登录或者注册
       */
      kind?: "LOGIN" | "REGISTER" | "UPDATE";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface CreateProviderRequest {
    body: {
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    } & {
      /**
       * provider ns
       */
      ns: string;
      /**
       * provider name
       */
      name: string;
    };
  }
  export interface CreateProviderResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListProvidersRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      ns?: string;
    };
  }
  export interface ListProvidersResponse {
    content?: ({
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count"?: number;
    };
  }
  export interface GetProviderRequest {
    providerId: string;
  }
  export interface GetProviderResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateProviderRequest {
    providerId: string;
    /**
     * 验证方式 例如 微信 验证
     */
    body: {
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    };
  }
  export interface UpdateProviderResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
      /**
       * 验证方式的名称，密码验证：PASSWORD，手机验证：PHONE，微信公众号： WX，微信小程序：WXAPP，微信企业号：WXQY，github：GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
      /**
       * 命名空间
       */
      ns?: string;
      /**
       * app id
       */
      appId?: string;
      /**
       * app secret
       */
      appSecret?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 是否自动更新用户数据
       */
      update?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteProviderRequest {
    providerId: string;
  }
  export interface CreateUserRequest {
    body: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      /**
       * 密码
       */
      password?: string;
      /**
       * root ns
       */
      rootNs: string;
      /**
       * ns
       */
      ns: string;
    };
  }
  export interface CreateUserResponse {
    content?: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListUsersRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      ns?: string;
      ns_like?: string;
    };
  }
  export interface ListUsersResponse {
    content?: ({
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count"?: number;
    };
  }
  export interface GetUserRequest {
    userId: string;
  }
  export interface GetUserResponse {
    content?: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateUserRequest {
    userId: string;
    body: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      /**
       * 密码
       */
      password?: string;
      /**
       * 验证码
       */
      code?: string;
    };
  }
  export interface UpdateUserResponse {
    content?: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteUserRequest {
    userId: string;
  }
  export interface RegisterUserRequest {
    body: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      /**
       * root ns
       */
      rootNs: string;
      /**
       * ns
       */
      ns: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 验证码
       */
      code?: string;
    };
  }
  export interface RegisterUserResponse {
    content?: {
      /**
       * 所在的根ns
       */
      rootNs?: string;
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 是否激活的用户
       */
      active?: boolean;
      /**
       * 用户来源
       */
      source?: string;
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户姓名
       */
      name?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 用户所用语言
       */
      language?: string;
      /**
       * 所在国家
       */
      country?: string;
      /**
       * 所在省
       */
      province?: string;
      /**
       * 所在城市
       */
      city?: string;
      /**
       * 第三方赋值的数据
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface CreateCodeRequest {
    body: {
      /**
       * login session id
       */
      session: string;
      /**
       * app id
       */
      app: string;
    };
  }
  export interface CreateCodeResponse {
    content?: {
      /**
       * code value
       */
      code?: string;
      /**
       * code过期时间
       */
      expireAt?: Date;
      /**
       * code belongs to namespaces
       */
      ns?: string;
      /**
       * code belongs to user
       */
      user?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 回调地址
       */
      redirectUri?: string;
    };
  }
  export interface CreateAppRequest {
    body: {
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    } & {
      /**
       * 所属ns
       */
      ns: string;
      /**
       * 名称
       */
      name: string;
      /**
       * 回调地址
       */
      redirectUri: string;
    };
  }
  export interface CreateAppResponse {
    content?: {
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListAppsRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      ns?: string;
    };
  }
  export interface ListAppsResponse {
    content?: ({
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    headers?: {
      "X-Total-Count"?: number;
    };
  }
  export interface GetAppRequest {
    appId: string;
  }
  export interface GetAppResponse {
    content?: {
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateAppRequest {
    appId: string;
    /**
     * app 配置
     */
    body: {
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    };
  }
  export interface UpdateAppResponse {
    content?: {
      /**
       * 所属ns
       */
      ns?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
      /**
       * 回调地址
       */
      redirectUri?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface DeleteAppRequest {
    appId: string;
  }
}

export = SDK;

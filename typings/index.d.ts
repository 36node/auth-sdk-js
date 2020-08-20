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
     * List scopes
     */
    listScopes(req: ListScopesRequest): Promise<ListScopesResponse>;
    /**
     * Get ns&#x27;s register config
     */
    getNsRegister(req: GetNsRegisterRequest): Promise<GetNsRegisterResponse>;
    /**
     * Update ns&#x27;s register config
     */
    updateNsRegister(req: UpdateNsRegisterRequest): Promise<UpdateNsRegisterResponse>;
    /**
     * Get ns&#x27;s register config must items
     */
    getNsRegisterMust(req: GetNsRegisterMustRequest): Promise<GetNsRegisterMustResponse>;
    /**
     * Get ns&#x27;s email config
     */
    getNsEmail(req: GetNsEmailRequest): Promise<GetNsEmailResponse>;
    /**
     * Update ns&#x27;s email config
     */
    updateNsEmail(req: UpdateNsEmailRequest): Promise<UpdateNsEmailResponse>;
    /**
     * List ns&#x27;s email templates
     */
    listNsEmailtpls(req: ListNsEmailtplsRequest): Promise<ListNsEmailtplsResponse>;
    /**
     * Update ns&#x27;s emailtpl
     */
    updateNsEmailtpl(req: UpdateNsEmailtplRequest): Promise<UpdateNsEmailtplResponse>;
    /**
     * Get ns&#x27;s sms config
     */
    getNsSms(req: GetNsSmsRequest): Promise<GetNsSmsResponse>;
    /**
     * Update ns&#x27;s sms config
     */
    updateNsSms(req: UpdateNsSmsRequest): Promise<UpdateNsSmsResponse>;
    /**
     * List ns&#x27;s sms templates
     */
    listNsSmstpls(req: ListNsSmstplsRequest): Promise<ListNsSmstplsResponse>;
    /**
     * Update ns&#x27;s smstpl
     */
    updateNsSmstpl(req: UpdateNsSmstplRequest): Promise<UpdateNsSmstplResponse>;
    /**
     * Create namespace role
     */
    createNsRole(req: CreateNsRoleRequest): Promise<CreateNsRoleResponse>;
    /**
     * List ns&#x27;s roles
     */
    listNsRoles(req: ListNsRolesRequest): Promise<ListNsRolesResponse>;
    /**
     * Update ns&#x27;s role
     */
    updateNsRole(req: UpdateNsRoleRequest): Promise<UpdateNsRoleResponse>;
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
       * 空间描述
       */
      desc?: string;
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
       * 空间描述
       */
      desc?: string;
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
       * 空间描述
       */
      desc?: string;
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
       * 空间描述
       */
      desc?: string;
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
       * 空间描述
       */
      desc?: string;
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
       * 空间描述
       */
      desc?: string;
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
  export interface ListScopesRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      name_like?: string;
    };
  }
  export interface ListScopesResponse {
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
       * 空间描述
       */
      desc?: string;
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
  export interface GetNsRegisterRequest {
    namespaceId: string;
  }
  export interface GetNsRegisterResponse {
    /**
     * ns 注册配置
     */
    content?: {
      /**
       * 是否配置 用户名
       */
      username?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 手机号
       */
      phone?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 邮箱
       */
      email?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 头像
       */
      avatar?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 昵称
       */
      nickname?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 身份证号
       */
      idnumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 性别
       */
      gender?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 QQ号
       */
      qq?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 微信号
       */
      wechat?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 个人简介
       */
      personalinfo?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 生日
       */
      birthday?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 兴趣
       */
      hobby?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 地址
       */
      address?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 国家
       */
      country?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 公司名
       */
      company?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工号
       */
      worknumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工龄
       */
      wordyear?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 资质
       */
      credential?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 职位
       */
      position?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 毕业院校
       */
      school?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 专业
       */
      major?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 学历
       */
      education?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 班级
       */
      class?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 导师
       */
      teacher?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 开户行
       */
      bank?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 银行卡号
       */
      bankcardnumber?: "MUST" | "NOMUST" | "NONEED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNsRegisterRequest {
    namespaceId: string;
    /**
     * ns 注册配置
     */
    body: {
      /**
       * 是否配置 用户名
       */
      username?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 手机号
       */
      phone?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 邮箱
       */
      email?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 头像
       */
      avatar?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 昵称
       */
      nickname?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 身份证号
       */
      idnumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 性别
       */
      gender?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 QQ号
       */
      qq?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 微信号
       */
      wechat?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 个人简介
       */
      personalinfo?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 生日
       */
      birthday?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 兴趣
       */
      hobby?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 地址
       */
      address?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 国家
       */
      country?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 公司名
       */
      company?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工号
       */
      worknumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工龄
       */
      wordyear?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 资质
       */
      credential?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 职位
       */
      position?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 毕业院校
       */
      school?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 专业
       */
      major?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 学历
       */
      education?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 班级
       */
      class?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 导师
       */
      teacher?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 开户行
       */
      bank?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 银行卡号
       */
      bankcardnumber?: "MUST" | "NOMUST" | "NONEED";
    };
  }
  export interface UpdateNsRegisterResponse {
    /**
     * ns 注册配置
     */
    content?: {
      /**
       * 是否配置 用户名
       */
      username?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 手机号
       */
      phone?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 邮箱
       */
      email?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 头像
       */
      avatar?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 昵称
       */
      nickname?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 身份证号
       */
      idnumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 性别
       */
      gender?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 QQ号
       */
      qq?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 微信号
       */
      wechat?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 个人简介
       */
      personalinfo?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 生日
       */
      birthday?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 兴趣
       */
      hobby?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 地址
       */
      address?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 国家
       */
      country?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 公司名
       */
      company?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工号
       */
      worknumber?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 工龄
       */
      wordyear?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 资质
       */
      credential?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 职位
       */
      position?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 毕业院校
       */
      school?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 专业
       */
      major?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 学历
       */
      education?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 班级
       */
      class?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 导师
       */
      teacher?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 开户行
       */
      bank?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 银行卡号
       */
      bankcardnumber?: "MUST" | "NOMUST" | "NONEED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface GetNsRegisterMustRequest {
    namespaceId: string;
  }
  export interface GetNsRegisterMustResponse {
    /**
     * ns 必填项注册配置
     */
    content?: {
      /**
       * 是否配置 用户名
       */
      username?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 手机号
       */
      phone?: "MUST" | "NOMUST" | "NONEED";
      /**
       * 是否配置 邮箱
       */
      email?: "MUST" | "NOMUST" | "NONEED";
      other?: string[];
    };
  }
  export interface GetNsEmailRequest {
    namespaceId: string;
  }
  export interface GetNsEmailResponse {
    /**
     * 邮箱配置
     */
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 邮箱服务器地址
       */
      host?: string;
      /**
       * 邮箱服务器端口
       */
      port?: number;
      /**
       * 是否开启tls
       */
      tls?: boolean;
      /**
       * tls开启后是否验证
       */
      authorize?: boolean;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNsEmailRequest {
    namespaceId: string;
    /**
     * 邮箱配置
     */
    body: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 邮箱服务器地址
       */
      host?: string;
      /**
       * 邮箱服务器端口
       */
      port?: number;
      /**
       * 是否开启tls
       */
      tls?: boolean;
      /**
       * tls开启后是否验证
       */
      authorize?: boolean;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNsEmailResponse {
    /**
     * 邮箱配置
     */
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 邮箱服务器地址
       */
      host?: string;
      /**
       * 邮箱服务器端口
       */
      port?: number;
      /**
       * 是否开启tls
       */
      tls?: boolean;
      /**
       * tls开启后是否验证
       */
      authorize?: boolean;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListNsEmailtplsRequest {
    namespaceId: string;
  }
  export interface ListNsEmailtplsResponse {
    content?: ({
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 发送邮箱地址 from
       */
      address?: string;
      /**
       * 邮件主题
       */
      subject?: string;
      /**
       * 邮件正文模板
       */
      content?: string;
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
  export interface UpdateNsEmailtplRequest {
    namespaceId: string;
    emailtplId: string;
    /**
     * 邮件模板配置
     */
    body: {
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 发送邮箱地址 from
       */
      address?: string;
      /**
       * 邮件主题
       */
      subject?: string;
      /**
       * 邮件正文模板
       */
      content?: string;
    };
  }
  export interface UpdateNsEmailtplResponse {
    /**
     * 邮件模板配置
     */
    content?: {
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 发送邮箱地址 from
       */
      address?: string;
      /**
       * 邮件主题
       */
      subject?: string;
      /**
       * 邮件正文模板
       */
      content?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface GetNsSmsRequest {
    namespaceId: string;
  }
  export interface GetNsSmsResponse {
    /**
     * 手机短信配置
     */
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 属于 阿里云 腾讯云
       */
      type?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNsSmsRequest {
    namespaceId: string;
    /**
     * 手机短信配置
     */
    body: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 属于 阿里云 腾讯云
       */
      type?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateNsSmsResponse {
    /**
     * 手机短信配置
     */
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 属于 阿里云 腾讯云
       */
      type?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListNsSmstplsRequest {
    namespaceId: string;
  }
  export interface ListNsSmstplsResponse {
    content?: ({
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 模板ID
       */
      tplId?: string;
      /**
       * 模板签名
       */
      sign?: string;
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
  export interface UpdateNsSmstplRequest {
    namespaceId: string;
    smstplId: string;
    /**
     * 手机模板配置
     */
    body: {
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 模板ID
       */
      tplId?: string;
      /**
       * 模板签名
       */
      sign?: string;
    };
  }
  export interface UpdateNsSmstplResponse {
    /**
     * 手机模板配置
     */
    content?: {
      /**
       * 模板类型
       */
      type?: "WELCOME" | "VALID" | "BIND";
      /**
       * 是否启用
       */
      use?: boolean;
      /**
       * 模板ID
       */
      tplId?: string;
      /**
       * 模板签名
       */
      sign?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface CreateNsRoleRequest {
    body: {
      /**
       * 角色名称
       */
      name: string;
      /**
       * 角色类型
       */
      type: string;
      /**
       * 角色描述
       */
      desc?: string;
    };
  }
  export interface CreateNsRoleResponse {
    /**
     * 角色配置
     */
    content?: {
      /**
       * 角色名称
       */
      name?: string;
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 角色描述
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface ListNsRolesRequest {
    namespaceId: string;
  }
  export interface ListNsRolesResponse {
    content?: ({
      /**
       * 角色名称
       */
      name?: string;
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 角色描述
       */
      desc?: string;
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
  export interface UpdateNsRoleRequest {
    namespaceId: string;
    roleId: string;
    /**
     * 角色配置
     */
    body: {
      /**
       * 角色名称
       */
      name?: string;
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 角色描述
       */
      desc?: string;
    };
  }
  export interface UpdateNsRoleResponse {
    /**
     * 角色配置
     */
    content?: {
      /**
       * 角色名称
       */
      name?: string;
      /**
       * 角色类型
       */
      type?: string;
      /**
       * 角色描述
       */
      desc?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
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
       * 手机验证码
       */
      phoneCode?: string;
      /**
       * 邮箱验证码
       */
      emailCode?: string;
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
         * 用户来源
         */
        source?: string;
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 兴趣
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
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
         * 用户来源
         */
        source?: string;
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 兴趣
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
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
         * 用户来源
         */
        source?: string;
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 兴趣
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
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
         * 用户来源
         */
        source?: string;
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 用户生日
         */
        birthday?: Date;
        /**
         * 兴趣
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 密码
       */
      password?: string;
      /**
       * 手机验证码
       */
      phoneCode?: string;
      /**
       * 邮箱验证码
       */
      emailCode?: string;
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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
      ns?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 手机验证码
       */
      phoneCode?: string;
      /**
       * 邮箱验证码
       */
      emailCode?: string;
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
       * 用户来源
       */
      source?: string;
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 用户生日
       */
      birthday?: Date;
      /**
       * 兴趣
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
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

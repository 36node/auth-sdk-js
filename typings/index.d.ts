declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  scope: ScopeAPI;
  namespace: NamespaceAPI;
  user: UserAPI;
  provider: ProviderAPI;
  app: AppAPI;
  session: SessionAPI;
  validation: ValidationAPI;
  invitation: InvitationAPI;
}

declare global {
  export interface Options {
    base?: string;
    token?: string | (() => string);
  }

  export interface ScopeAPI {
    /**
     * Create scope
     */
    createScope(req: CreateScopeRequest): Promise<CreateScopeResponse>;
    /**
     * List scopes
     */
    listScopes(req: ListScopesRequest): Promise<ListScopesResponse>;
    /**
     * Get scope by id
     */
    getScope(req: GetScopeRequest): Promise<GetScopeResponse>;
    /**
     * Update scope
     */
    updateScope(req: UpdateScopeRequest): Promise<UpdateScopeResponse>;
    /**
     * delete scope
     */
    deleteScope(req: DeleteScopeRequest): Promise<DeleteScopeResponse>;
    /**
     * Get scope&#x27;s sms config
     */
    getScopeSms(req: GetScopeSmsRequest): Promise<GetScopeSmsResponse>;
    /**
     * Update scope&#x27;s sms config
     */
    updateScopeSms(req: UpdateScopeSmsRequest): Promise<UpdateScopeSmsResponse>;
    /**
     * Get scope&#x27;s email config
     */
    getScopeEmail(req: GetScopeEmailRequest): Promise<GetScopeEmailResponse>;
    /**
     * Update scope&#x27;s email config
     */
    updateScopeEmail(req: UpdateScopeEmailRequest): Promise<UpdateScopeEmailResponse>;
    /**
     * List scope&#x27;s email templates
     */
    listScopeEmailtpls(req: ListScopeEmailtplsRequest): Promise<ListScopeEmailtplsResponse>;
    /**
     * Get emailtpl by id
     */
    getScopeEmailtpl(req: GetScopeEmailtplRequest): Promise<GetScopeEmailtplResponse>;
    /**
     * Update scope&#x27;s emailtpl
     */
    updateScopeEmailtpl(req: UpdateScopeEmailtplRequest): Promise<UpdateScopeEmailtplResponse>;
    /**
     * Get scope&#x27;s register config
     */
    getScopeRegister(req: GetScopeRegisterRequest): Promise<GetScopeRegisterResponse>;
    /**
     * Update scope&#x27;s register config
     */
    updateScopeRegister(req: UpdateScopeRegisterRequest): Promise<UpdateScopeRegisterResponse>;
    /**
     * Get scope&#x27;s register config must items
     */
    getScopeRegisterMust(req: GetScopeRegisterMustRequest): Promise<GetScopeRegisterMustResponse>;
    /**
     * Get scope&#x27;s person info config
     */
    getScopePerson(req: GetScopePersonRequest): Promise<GetScopePersonResponse>;
    /**
     * Update scope&#x27;s person info config
     */
    updateScopePerson(req: UpdateScopePersonRequest): Promise<UpdateScopePersonResponse>;
    /**
     * Create scope role
     */
    createScopeRole(req: CreateScopeRoleRequest): Promise<CreateScopeRoleResponse>;
    /**
     * List scope&#x27;s roles
     */
    listScopeRoles(req: ListScopeRolesRequest): Promise<ListScopeRolesResponse>;
    /**
     * Get role by scopeId &amp; roleId
     */
    getScopeRole(req: GetScopeRoleRequest): Promise<GetScopeRoleResponse>;
    /**
     * Update scope&#x27;s role
     */
    updateScopeRole(req: UpdateScopeRoleRequest): Promise<UpdateScopeRoleResponse>;
    /**
     * Get scope&#x27;s security config
     */
    getScopeSecurity(req: GetScopeSecurityRequest): Promise<GetScopeSecurityResponse>;
    /**
     * Update scope&#x27;s security config
     */
    updateScopeSecurity(req: UpdateScopeSecurityRequest): Promise<UpdateScopeSecurityResponse>;
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
    /**
     * list persons by provider id
     */
    listPersons(req: ListPersonsRequest): Promise<ListPersonsResponse>;
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
     * third register user
     */
    thirdRegisterUser(req: ThirdRegisterUserRequest): Promise<ThirdRegisterUserResponse>;
    /**
     * bind user
     */
    bindUser(req: BindUserRequest): Promise<BindUserResponse>;
    /**
     * Create test session
     */
    createTestSession(req: CreateTestSessionRequest): Promise<CreateTestSessionResponse>;
  }
  export interface ValidationAPI {
    /**
     * Create validation 发送验证码
     */
    createValidation(req: CreateValidationRequest): Promise<CreateValidationResponse>;
  }
  export interface InvitationAPI {
    /**
     * Create invitation 生成邀请码
     */
    createInvitation(req: CreateInvitationRequest): Promise<CreateInvitationResponse>;
    /**
     * Get invitation 验证邀请码是否可用
     */
    getInvitation(req: GetInvitationRequest): Promise<GetInvitationResponse>;
  }

  export interface CreateScopeRequest {
    body: {
      /**
       * 唯一的英文名，不能重复 /^(\w+)*$/i
       */
      id?: string;
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
      /**
       * 用户自定义数据
       */
      data?: string;
    };
  }
  export interface CreateScopeResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复 /^(\w+)*$/i
       */
      id?: string;
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
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
  export interface ListScopesRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      name_like?: string;
      type?: "OWNER" | "COLLABORATOR";
    };
  }
  export interface ListScopesResponse {
    content?: ({
      /**
       * 唯一的英文名，不能重复 /^(\w+)*$/i
       */
      id?: string;
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
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
    } & {
      /**
       * owner
       */
      owner?: string;
      collaborators?: string[];
    })[];
    headers?: {
      "X-Total-Count"?: number;
    };
  }
  export interface GetScopeRequest {
    scopeId: string;
  }
  export interface GetScopeResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复 /^(\w+)*$/i
       */
      id?: string;
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
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
  export interface UpdateScopeRequest {
    scopeId: string;
    body: {
      collaborators?: string[];
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
      /**
       * 用户自定义数据
       */
      data?: string;
    };
  }
  export interface UpdateScopeResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复 /^(\w+)*$/i
       */
      id?: string;
      /**
       * 用户池的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 用户池描述
       */
      desc?: string;
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
  export interface DeleteScopeRequest {
    scopeId: string;
  }
  export interface GetScopeSmsRequest {
    scopeId: string;
  }
  export interface GetScopeSmsResponse {
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 开启自定义
       */
      custom?: boolean;
      /**
       * 属于 阿里云 腾讯云
       */
      provider?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
      /**
       * 验证码 模板ID
       */
      tplId?: string;
      /**
       * 验证码 模板签名
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
  export interface UpdateScopeSmsRequest {
    scopeId: string;
    /**
     * 手机短信配置
     */
    body: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 开启自定义
       */
      custom?: boolean;
      /**
       * 属于 阿里云 腾讯云
       */
      provider?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
      /**
       * 验证码 模板ID
       */
      tplId?: string;
      /**
       * 验证码 模板签名
       */
      sign?: string;
    };
  }
  export interface UpdateScopeSmsResponse {
    content?: {
      /**
       * 验证码过期时间 分钟
       */
      expire?: number;
      /**
       * 开启自定义
       */
      custom?: boolean;
      /**
       * 属于 阿里云 腾讯云
       */
      provider?: "ALI" | "TENCENT";
      /**
       * id
       */
      keyId?: string;
      /**
       * secret
       */
      keySecret?: string;
      /**
       * 验证码 模板ID
       */
      tplId?: string;
      /**
       * 验证码 模板签名
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
  export interface GetScopeEmailRequest {
    scopeId: string;
  }
  export interface GetScopeEmailResponse {
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
  export interface UpdateScopeEmailRequest {
    scopeId: string;
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
    };
  }
  export interface UpdateScopeEmailResponse {
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
  export interface ListScopeEmailtplsRequest {
    scopeId: string;
  }
  export interface ListScopeEmailtplsResponse {
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
  export interface GetScopeEmailtplRequest {
    scopeId: string;
    emailtplId: string;
  }
  export interface GetScopeEmailtplResponse {
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
  export interface UpdateScopeEmailtplRequest {
    scopeId: string;
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
  export interface UpdateScopeEmailtplResponse {
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
  export interface GetScopeRegisterRequest {
    scopeId: string;
  }
  export interface GetScopeRegisterResponse {
    /**
     * scope 注册配置
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
  export interface UpdateScopeRegisterRequest {
    scopeId: string;
    /**
     * scope 配置项
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
  export interface UpdateScopeRegisterResponse {
    /**
     * scope 注册配置
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
  export interface GetScopeRegisterMustRequest {
    scopeId: string;
  }
  export interface GetScopeRegisterMustResponse {
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
  export interface GetScopePersonRequest {
    scopeId: string;
  }
  export interface GetScopePersonResponse {
    /**
     * scope 个人中心 配置
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
  export interface UpdateScopePersonRequest {
    scopeId: string;
    /**
     * scope 配置项
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
  export interface UpdateScopePersonResponse {
    /**
     * scope 个人中心 配置
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
  export interface CreateScopeRoleRequest {
    scopeId: string;
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
  export interface CreateScopeRoleResponse {
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
  export interface ListScopeRolesRequest {
    query?: {
      _limit?: number;
      _offset?: string;
    };
    scopeId: string;
  }
  export interface ListScopeRolesResponse {
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
  export interface GetScopeRoleRequest {
    scopeId: string;
    roleId: string;
  }
  export interface GetScopeRoleResponse {
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
  export interface UpdateScopeRoleRequest {
    scopeId: string;
    roleId: string;
    body: {
      /**
       * 角色名称
       */
      name?: string;
      /**
       * 角色描述
       */
      desc?: string;
    };
  }
  export interface UpdateScopeRoleResponse {
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
  export interface GetScopeSecurityRequest {
    scopeId: string;
  }
  export interface GetScopeSecurityResponse {
    /**
     * scope 安全配置
     */
    content?: {
      /**
       * 是否开放注册
       */
      public?: "PUBLIC" | "INVITE" | "CLOSE";
      /**
       * 三方登录后是否需要绑定账户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface UpdateScopeSecurityRequest {
    scopeId: string;
    /**
     * scope 安全配置
     */
    body: {
      /**
       * 是否开放注册
       */
      public?: "PUBLIC" | "INVITE" | "CLOSE";
      /**
       * 三方登录后是否需要绑定账户
       */
      bind?: boolean;
    };
  }
  export interface UpdateScopeSecurityResponse {
    /**
     * scope 安全配置
     */
    content?: {
      /**
       * 是否开放注册
       */
      public?: "PUBLIC" | "INVITE" | "CLOSE";
      /**
       * 三方登录后是否需要绑定账户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface CreateNamespaceRequest {
    body: {
      /**
       * 唯一的英文名，不能重复
       */
      id: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
      /**
       * 用户自定义数据
       */
      data?: string;
    };
  }
  export interface CreateNamespaceResponse {
    content?: {
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
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
      id_like: string;
    };
  }
  export interface ListNamespacesResponse {
    content?: ({
      /**
       * 唯一的英文名，不能重复，用 / 开头
       */
      id?: string;
      /**
       * 父空间
       */
      parent?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
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
       * 父空间
       */
      parent?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
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
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
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
       * 父空间
       */
      parent?: string;
      /**
       * 命名空间的名称，例如`百世诺`
       */
      name?: string;
      /**
       * 空间描述
       */
      desc?: string;
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
  export interface CreateUserRequest {
    body: {
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 用户ns
       */
      ns: string;
      /**
       * 密码
       */
      password: string;
    };
  }
  export interface CreateUserResponse {
    content?: {
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
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
       * ns
       */
      ns: string;
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
       * 密码
       */
      password: string;
      /**
       * 手机验证码
       */
      phoneCode?: string;
      /**
       * 邮箱验证码
       */
      emailCode?: string;
      /**
       * 邀请码
       */
      inviteCode?: string;
    };
  }
  export interface RegisterUserResponse {
    content?: {
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
       * 自定义信息
       */
      data?: string;
    } & {
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      /**
       * 用户池
       */
      scope: string;
      /**
       * 微信公众号，微信小程序，微信企业号，GITHUB
       */
      type: "WX" | "WXAPP" | "WXQY" | "GITHUB";
    };
  }
  export interface CreateProviderResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    };
  }
  export interface ListProvidersRequest {
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
      scope: string;
    };
  }
  export interface ListProvidersResponse {
    content?: ({
      /**
       * 描述
       */
      name?: string;
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    };
  }
  export interface UpdateProviderResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    };
  }
  export interface DeleteProviderRequest {
    providerId: string;
  }
  export interface ListPersonsRequest {
    providerId: string;
    query?: {
      _limit?: number;
      _offset?: string;
      _select?: string;
      _sort?: string;
    };
  }
  export interface ListPersonsResponse {
    content?: {
      /**
       * 描述
       */
      name?: string;
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
      /**
       * 是否绑定用户
       */
      bind?: boolean;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
       */
      type?: "PASSWORD" | "EMAIL" | "PHONE" | "WX" | "WXAPP" | "WXQY" | "GITHUB";
    };
  }
  export interface CreateAppRequest {
    body: {
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
       * 用户池
       */
      scope: string;
    };
  }
  export interface CreateAppResponse {
    content?: {
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
      scope: string;
      /**
       * app 类型
       */
      type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    };
  }
  export interface ListAppsResponse {
    content?: ({
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
    };
  }
  export interface CreateSessionResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to ns
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 角色
       */
      roles?: string[];
      user?: {
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
         * 自定义信息
         */
        data?: string;
      } & {
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      github?: {
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * 是否可用
       */
      active?: boolean;
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
      ns?: string;
      ns_like?: string;
      user?: string;
      active?: string;
    };
  }
  export interface ListSessionsResponse {
    content?: ({
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * user
       */
      user?:
        | ({
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
             * 自定义信息
             */
            data?: string;
          } & {
            /**
             * 过期时间
             */
            expireAt?: Date;
            /**
             * 用户来源
             */
            source?:
              | "DEFAULT"
              | "PHONE"
              | "EMAIL"
              | "PASSWORD"
              | "GITHUB"
              | "WX"
              | "WXAPP"
              | "WXCORP_INSEDE"
              | "WXCORP_OUTSIDE";
          } & {
            id: string;
            updateAt?: Date;
            updateBy?: string;
            createAt?: Date;
            createBy?: string;
          })
        | string;
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * 是否可用
       */
      active?: boolean;
      /**
       * session belongs to ns
       */
      ns?: string;
      /**
       * 是否可用
       */
      provider?: string;
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
       * session belongs to ns
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 角色
       */
      roles?: string[];
      user?: {
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
         * 自定义信息
         */
        data?: string;
      } & {
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      github?: {
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * 是否可用
       */
      active?: boolean;
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
  export interface ThirdRegisterUserRequest {
    body: {
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
      /**
       * 邀请码
       */
      inviteCode?: string;
    };
  }
  export interface ThirdRegisterUserResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to ns
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 角色
       */
      roles?: string[];
      user?: {
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
         * 自定义信息
         */
        data?: string;
      } & {
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      github?: {
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * 是否可用
       */
      active?: boolean;
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
       * session belongs to ns
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 角色
       */
      roles?: string[];
      user?: {
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
         * 自定义信息
         */
        data?: string;
      } & {
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      github?: {
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * 是否可用
       */
      active?: boolean;
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
  export interface CreateTestSessionRequest {
    /**
     * 创建temp token所需参数
     */
    body: {
      /**
       * scope
       */
      scope?: string;
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
  export interface CreateTestSessionResponse {
    content?: {
      /**
       * 会话过期时间
       */
      expireAt?: Date;
      /**
       * session belongs to ns
       */
      ns?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 角色
       */
      roles?: string[];
      user?: {
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
         * 自定义信息
         */
        data?: string;
      } & {
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      github?: {
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      };
      /**
       * 是否可用
       */
      active?: boolean;
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
      scope: string;
      phone?: string;
      email?: string;
      kind: "LOGIN" | "REGISTER" | "UPDATE";
    };
  }
  export interface CreateValidationResponse {
    content?: {
      /**
       * 所属的 scope
       */
      scope?: string;
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
  export interface CreateInvitationRequest {
    /**
     * 创建邀请码需要的参数
     */
    body: {
      scope: string;
    };
  }
  export interface CreateInvitationResponse {
    content?: {
      /**
       * 所属的 scope
       */
      scope?: string;
      /**
       * 邀请码
       */
      code?: string;
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
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
  export interface GetInvitationRequest {
    code: string;
    query?: {
      scope: string;
    };
  }
  export interface GetInvitationResponse {
    content?: {
      /**
       * 所属的 scope
       */
      scope?: string;
      /**
       * 邀请码
       */
      code?: string;
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
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
  }
}

export = SDK;

//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * scope's methods
   */
  scope = {
    /**
     * Create scope
     *
     * @param {CreateScopeRequest} req createScope request
     * @returns {Promise<CreateScopeResponse>} The scope created
     */
    createScope: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createScope");

      return fetch(`${this.base}/scopes`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scopes
     *
     * @param {ListScopesRequest} req listScopes request
     * @returns {Promise<ListScopesResponse>} A paged array of scopes
     */
    listScopes: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for scope");

      return fetch(`${this.base}/scopes`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope by id
     *
     * @param {GetScopeRequest} req getScope request
     * @returns {Promise<GetScopeResponse>} The scope with given id
     */
    getScope: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScope");

      return fetch(`${this.base}/scopes/${scopeId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope
     *
     * @param {UpdateScopeRequest} req updateScope request
     * @returns {Promise<UpdateScopeResponse>} The scope
     */
    updateScope: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScope");
      if (!body) throw new Error("requetBody is required for updateScope");

      return fetch(`${this.base}/scopes/${scopeId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete scope
     *
     * @param {DeleteScopeRequest} req deleteScope request
     */
    deleteScope: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for deleteScope");

      return fetch(`${this.base}/scopes/${scopeId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s sms config
     *
     * @param {GetScopeSmsRequest} req getScopeSms request
     * @returns {Promise<GetScopeSmsResponse>} The scope&#x27;s sms config with given id
     */
    getScopeSms: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeSms");

      return fetch(`${this.base}/scopes/${scopeId}/sms`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s sms config
     *
     * @param {UpdateScopeSmsRequest} req updateScopeSms request
     * @returns {Promise<UpdateScopeSmsResponse>} The scope&#x27;s sms config with given id
     */
    updateScopeSms: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScopeSms");
      if (!body) throw new Error("requetBody is required for updateScopeSms");

      return fetch(`${this.base}/scopes/${scopeId}/sms`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope&#x27;s sms templates
     *
     * @param {ListScopeSmstplsRequest} req listScopeSmstpls request
     * @returns {Promise<ListScopeSmstplsResponse>} A paged array of sms templates
     */
    listScopeSmstpls: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for listScopeSmstpls");

      return fetch(`${this.base}/scopes/${scopeId}/smstpls`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get smstpl by id
     *
     * @param {GetScopeSmstplRequest} req getScopeSmstpl request
     * @returns {Promise<GetScopeSmstplResponse>} The smstpl with given id
     */
    getScopeSmstpl: req => {
      const { scopeId, smstplId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeSmstpl");
      if (!smstplId) throw new Error("smstplId is required for getScopeSmstpl");

      return fetch(`${this.base}/scopes/${scopeId}/smstpls/${smstplId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s smstpl
     *
     * @param {UpdateScopeSmstplRequest} req updateScopeSmstpl request
     * @returns {Promise<UpdateScopeSmstplResponse>} The namespace
     */
    updateScopeSmstpl: req => {
      const { scopeId, smstplId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeSmstpl");
      if (!smstplId)
        throw new Error("smstplId is required for updateScopeSmstpl");
      if (!body)
        throw new Error("requetBody is required for updateScopeSmstpl");

      return fetch(`${this.base}/scopes/${scopeId}/smstpls/${smstplId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s email config
     *
     * @param {GetScopeEmailRequest} req getScopeEmail request
     * @returns {Promise<GetScopeEmailResponse>} The scope&#x27;s email config with given id
     */
    getScopeEmail: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeEmail");

      return fetch(`${this.base}/scopes/${scopeId}/email`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s email config
     *
     * @param {UpdateScopeEmailRequest} req updateScopeEmail request
     * @returns {Promise<UpdateScopeEmailResponse>} The scope&#x27;s email config with given id
     */
    updateScopeEmail: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScopeEmail");
      if (!body) throw new Error("requetBody is required for updateScopeEmail");

      return fetch(`${this.base}/scopes/${scopeId}/email`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope&#x27;s email templates
     *
     * @param {ListScopeEmailtplsRequest} req listScopeEmailtpls request
     * @returns {Promise<ListScopeEmailtplsResponse>} A paged array of email templates
     */
    listScopeEmailtpls: req => {
      const { scopeId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeEmailtpls");

      return fetch(`${this.base}/scopes/${scopeId}/emailtpls`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get emailtpl by id
     *
     * @param {GetScopeEmailtplRequest} req getScopeEmailtpl request
     * @returns {Promise<GetScopeEmailtplResponse>} The emailtpl with given id
     */
    getScopeEmailtpl: req => {
      const { scopeId, emailtplId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeEmailtpl");
      if (!emailtplId)
        throw new Error("emailtplId is required for getScopeEmailtpl");

      return fetch(`${this.base}/scopes/${scopeId}/emailtpls/${emailtplId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s emailtpl
     *
     * @param {UpdateScopeEmailtplRequest} req updateScopeEmailtpl request
     * @returns {Promise<UpdateScopeEmailtplResponse>} The namespace
     */
    updateScopeEmailtpl: req => {
      const { scopeId, emailtplId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeEmailtpl");
      if (!emailtplId)
        throw new Error("emailtplId is required for updateScopeEmailtpl");
      if (!body)
        throw new Error("requetBody is required for updateScopeEmailtpl");

      return fetch(`${this.base}/scopes/${scopeId}/emailtpls/${emailtplId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s register config
     *
     * @param {GetScopeRegisterRequest} req getScopeRegister request
     * @returns {Promise<GetScopeRegisterResponse>} The scope&#x27;s register config with given id
     */
    getScopeRegister: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeRegister");

      return fetch(`${this.base}/scopes/${scopeId}/register`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s register config
     *
     * @param {UpdateScopeRegisterRequest} req updateScopeRegister request
     * @returns {Promise<UpdateScopeRegisterResponse>} The scope&#x27;s register config with given id
     */
    updateScopeRegister: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeRegister");
      if (!body)
        throw new Error("requetBody is required for updateScopeRegister");

      return fetch(`${this.base}/scopes/${scopeId}/register`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s register config must items
     *
     * @param {GetScopeRegisterMustRequest} req getScopeRegisterMust request
     * @returns {Promise<GetScopeRegisterMustResponse>} scope&#x27;s register config must items
     */
    getScopeRegisterMust: req => {
      const { scopeId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for getScopeRegisterMust");

      return fetch(`${this.base}/scopes/${scopeId}/register/must`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s person info config
     *
     * @param {GetScopePersonRequest} req getScopePerson request
     * @returns {Promise<GetScopePersonResponse>} The scope&#x27;s person info config with given id
     */
    getScopePerson: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopePerson");

      return fetch(`${this.base}/scopes/${scopeId}/person`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s person info config
     *
     * @param {UpdateScopePersonRequest} req updateScopePerson request
     * @returns {Promise<UpdateScopePersonResponse>} The scope&#x27;s register config with given id
     */
    updateScopePerson: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopePerson");
      if (!body)
        throw new Error("requetBody is required for updateScopePerson");

      return fetch(`${this.base}/scopes/${scopeId}/person`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create scope role
     *
     * @param {CreateScopeRoleRequest} req createScopeRole request
     * @returns {Promise<CreateScopeRoleResponse>} The scope role created
     */
    createScopeRole: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for createScopeRole");
      if (!body) throw new Error("requetBody is required for createScopeRole");

      return fetch(`${this.base}/scopes/${scopeId}/roles`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope&#x27;s roles
     *
     * @param {ListScopeRolesRequest} req listScopeRoles request
     * @returns {Promise<ListScopeRolesResponse>} A paged array of roles
     */
    listScopeRoles: req => {
      const { scopeId, query } = req || {};

      if (!scopeId) throw new Error("scopeId is required for listScopeRoles");

      return fetch(`${this.base}/scopes/${scopeId}/roles`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get role by scopeId &amp; roleId
     *
     * @param {GetScopeRoleRequest} req getScopeRole request
     * @returns {Promise<GetScopeRoleResponse>} The scope with given id
     */
    getScopeRole: req => {
      const { scopeId, roleId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeRole");
      if (!roleId) throw new Error("roleId is required for getScopeRole");

      return fetch(`${this.base}/scopes/${scopeId}/roles/${roleId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s role
     *
     * @param {UpdateScopeRoleRequest} req updateScopeRole request
     * @returns {Promise<UpdateScopeRoleResponse>} The namespace
     */
    updateScopeRole: req => {
      const { scopeId, roleId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScopeRole");
      if (!roleId) throw new Error("roleId is required for updateScopeRole");
      if (!body) throw new Error("requetBody is required for updateScopeRole");

      return fetch(`${this.base}/scopes/${scopeId}/roles/${roleId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope&#x27;s security config
     *
     * @param {GetScopeSecurityRequest} req getScopeSecurity request
     * @returns {Promise<GetScopeSecurityResponse>} The scope&#x27;s security config with given id
     */
    getScopeSecurity: req => {
      const { scopeId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeSecurity");

      return fetch(`${this.base}/scopes/${scopeId}/security`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope&#x27;s security config
     *
     * @param {UpdateScopeSecurityRequest} req updateScopeSecurity request
     * @returns {Promise<UpdateScopeSecurityResponse>} The scope&#x27;s security config with given id
     */
    updateScopeSecurity: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeSecurity");
      if (!body)
        throw new Error("requetBody is required for updateScopeSecurity");

      return fetch(`${this.base}/scopes/${scopeId}/security`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * namespace's methods
   */
  namespace = {
    /**
     * Create namespace
     *
     * @param {CreateNamespaceRequest} req createNamespace request
     * @returns {Promise<CreateNamespaceResponse>} The namespace created
     */
    createNamespace: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createNamespace");

      return fetch(`${this.base}/namespaces`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List namespaces
     *
     * @param {ListNamespacesRequest} req listNamespaces request
     * @returns {Promise<ListNamespacesResponse>} A paged array of namespaces
     */
    listNamespaces: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for namespace");

      return fetch(`${this.base}/namespaces`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get namespace by id
     *
     * @param {GetNamespaceRequest} req getNamespace request
     * @returns {Promise<GetNamespaceResponse>} The namespace with given id
     */
    getNamespace: req => {
      const { namespaceId } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for getNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update namespace
     *
     * @param {UpdateNamespaceRequest} req updateNamespace request
     * @returns {Promise<UpdateNamespaceResponse>} The namespace
     */
    updateNamespace: req => {
      const { namespaceId, body } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for updateNamespace");
      if (!body) throw new Error("requetBody is required for updateNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete namespace
     *
     * @param {DeleteNamespaceRequest} req deleteNamespace request
     */
    deleteNamespace: req => {
      const { namespaceId } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for deleteNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * user's methods
   */
  user = {
    /**
     * Create user
     *
     * @param {CreateUserRequest} req createUser request
     * @returns {Promise<CreateUserResponse>} The user created
     */
    createUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createUser");

      return fetch(`${this.base}/users`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List users
     *
     * @param {ListUsersRequest} req listUsers request
     * @returns {Promise<ListUsersResponse>} A paged array of users
     */
    listUsers: req => {
      const { query } = req || {};

      return fetch(`${this.base}/users`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get user by id
     *
     * @param {GetUserRequest} req getUser request
     * @returns {Promise<GetUserResponse>} The user with given id
     */
    getUser: req => {
      const { userId } = req || {};

      if (!userId) throw new Error("userId is required for getUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update user
     *
     * @param {UpdateUserRequest} req updateUser request
     * @returns {Promise<UpdateUserResponse>} The user
     */
    updateUser: req => {
      const { userId, body } = req || {};

      if (!userId) throw new Error("userId is required for updateUser");
      if (!body) throw new Error("requetBody is required for updateUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete user
     *
     * @param {DeleteUserRequest} req deleteUser request
     */
    deleteUser: req => {
      const { userId } = req || {};

      if (!userId) throw new Error("userId is required for deleteUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * register user
     *
     * @param {RegisterUserRequest} req registerUser request
     * @returns {Promise<RegisterUserResponse>} The user register
     */
    registerUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for registerUser");

      return fetch(`${this.base}/register`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * provider's methods
   */
  provider = {
    /**
     * Create provider
     *
     * @param {CreateProviderRequest} req createProvider request
     * @returns {Promise<CreateProviderResponse>} The provider created
     */
    createProvider: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createProvider");

      return fetch(`${this.base}/providers`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List providers
     *
     * @param {ListProvidersRequest} req listProviders request
     * @returns {Promise<ListProvidersResponse>} A paged array of providers
     */
    listProviders: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for provider");

      return fetch(`${this.base}/providers`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get provider by id
     *
     * @param {GetProviderRequest} req getProvider request
     * @returns {Promise<GetProviderResponse>} The provider with given id
     */
    getProvider: req => {
      const { providerId } = req || {};

      if (!providerId)
        throw new Error("providerId is required for getProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update provider
     *
     * @param {UpdateProviderRequest} req updateProvider request
     * @returns {Promise<UpdateProviderResponse>} The provider
     */
    updateProvider: req => {
      const { providerId, body } = req || {};

      if (!providerId)
        throw new Error("providerId is required for updateProvider");
      if (!body) throw new Error("requetBody is required for updateProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete provider
     *
     * @param {DeleteProviderRequest} req deleteProvider request
     */
    deleteProvider: req => {
      const { providerId } = req || {};

      if (!providerId)
        throw new Error("providerId is required for deleteProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * list persons by provider id
     *
     * @param {ListPersonsRequest} req listPersons request
     * @returns {Promise<ListPersonsResponse>} The provider with given id
     */
    listPersons: req => {
      const { providerId, query } = req || {};

      if (!providerId)
        throw new Error("providerId is required for listPersons");

      return fetch(`${this.base}/providers/${providerId}/persons`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * app's methods
   */
  app = {
    /**
     * Create app
     *
     * @param {CreateAppRequest} req createApp request
     * @returns {Promise<CreateAppResponse>} The app created
     */
    createApp: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createApp");

      return fetch(`${this.base}/apps`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List apps
     *
     * @param {ListAppsRequest} req listApps request
     * @returns {Promise<ListAppsResponse>} A paged array of apps
     */
    listApps: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for app");

      return fetch(`${this.base}/apps`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get app by id
     *
     * @param {GetAppRequest} req getApp request
     * @returns {Promise<GetAppResponse>} The app with given id
     */
    getApp: req => {
      const { appId } = req || {};

      if (!appId) throw new Error("appId is required for getApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update app
     *
     * @param {UpdateAppRequest} req updateApp request
     * @returns {Promise<UpdateAppResponse>} The provider
     */
    updateApp: req => {
      const { appId, body } = req || {};

      if (!appId) throw new Error("appId is required for updateApp");
      if (!body) throw new Error("requetBody is required for updateApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete app
     *
     * @param {DeleteAppRequest} req deleteApp request
     */
    deleteApp: req => {
      const { appId } = req || {};

      if (!appId) throw new Error("appId is required for deleteApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * session's methods
   */
  session = {
    /**
     * Create session
     *
     * @param {CreateSessionRequest} req createSession request
     * @returns {Promise<CreateSessionResponse>} The session created
     */
    createSession: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createSession");

      return fetch(`${this.base}/sessions`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List sessions
     *
     * @param {ListSessionsRequest} req listSessions request
     * @returns {Promise<ListSessionsResponse>} A paged array of session
     */
    listSessions: req => {
      const { query } = req || {};

      return fetch(`${this.base}/sessions`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get session and auto refresh it if need
     *
     * @param {GetSessionRequest} req getSession request
     * @returns {Promise<GetSessionResponse>} The session
     */
    getSession: req => {
      const { sessionId } = req || {};

      if (!sessionId) throw new Error("sessionId is required for getSession");

      return fetch(`${this.base}/sessions/${sessionId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Deletes a session
     *
     * @param {DeleteSessionRequest} req deleteSession request
     */
    deleteSession: req => {
      const { sessionId } = req || {};

      if (!sessionId)
        throw new Error("sessionId is required for deleteSession");

      return fetch(`${this.base}/sessions/${sessionId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * third register user
     *
     * @param {ThirdRegisterUserRequest} req thirdRegisterUser request
     * @returns {Promise<ThirdRegisterUserResponse>} The session created
     */
    thirdRegisterUser: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for thirdRegisterUser");

      return fetch(`${this.base}/thirdRegister`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * bind user
     *
     * @param {BindUserRequest} req bindUser request
     * @returns {Promise<BindUserResponse>} The session created
     */
    bindUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for bindUser");

      return fetch(`${this.base}/bind`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create test session
     *
     * @param {CreateTestSessionRequest} req createTestSession request
     * @returns {Promise<CreateTestSessionResponse>} The code created
     */
    createTestSession: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createTestSession");

      return fetch(`${this.base}/test`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * validation's methods
   */
  validation = {
    /**
     * Create validation 发送验证码
     *
     * @param {CreateValidationRequest} req createValidation request
     * @returns {Promise<CreateValidationResponse>} The validation created
     */
    createValidation: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createValidation");

      return fetch(`${this.base}/validation`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * invitation's methods
   */
  invitation = {
    /**
     * Create invitation 生成邀请码
     *
     * @param {CreateInvitationRequest} req createInvitation request
     * @returns {Promise<CreateInvitationResponse>} The invitation created
     */
    createInvitation: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createInvitation");

      return fetch(`${this.base}/invitation`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get invitation 验证邀请码是否可用
     *
     * @param {GetInvitationRequest} req getInvitation request
     * @returns {Promise<GetInvitationResponse>} The invitation by code
     */
    getInvitation: req => {
      const { code, query } = req || {};

      if (!code) throw new Error("code is required for getInvitation");
      if (!query) throw new Error("query is required for invitation");

      return fetch(`${this.base}/invitation/${code}`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
}

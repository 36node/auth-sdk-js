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
    /**
     * list scope&#x27;s register form items
     *
     * @param {ListScopeRegisterItemsRequest} req listScopeRegisterItems request
     * @returns {Promise<ListScopeRegisterItemsResponse>} A paged array of register form items
     */
    listScopeRegisterItems: req => {
      const { scopeId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeRegisterItems");

      return fetch(`${this.base}/scopes/${scopeId}/registerForm`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * create or update scope&#x27;s register form item
     *
     * @param {UpsertScopeRegisterItemRequest} req upsertScopeRegisterItem request
     * @returns {Promise<UpsertScopeRegisterItemResponse>} The scope&#x27;s register config with given id
     */
    upsertScopeRegisterItem: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for upsertScopeRegisterItem");
      if (!body)
        throw new Error("requetBody is required for upsertScopeRegisterItem");

      return fetch(`${this.base}/scopes/${scopeId}/registerForm`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete scope&#x27;s register form item
     *
     * @param {DeleteScopeRegisterItemRequest} req deleteScopeRegisterItem request
     */
    deleteScopeRegisterItem: req => {
      const { scopeId, name } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeRegisterItem");
      if (!name)
        throw new Error("name is required for deleteScopeRegisterItem");

      return fetch(`${this.base}/scopes/${scopeId}/registerForm/${name}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * list scope&#x27;s profile form items
     *
     * @param {ListScopeProfileItemsRequest} req listScopeProfileItems request
     * @returns {Promise<ListScopeProfileItemsResponse>} A paged array of register form items
     */
    listScopeProfileItems: req => {
      const { scopeId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeProfileItems");

      return fetch(`${this.base}/scopes/${scopeId}/profileForm`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * create or update scope&#x27;s profile form item
     *
     * @param {UpsertScopeProfileItemRequest} req upsertScopeProfileItem request
     * @returns {Promise<UpsertScopeProfileItemResponse>} The scope&#x27;s profile config with given id
     */
    upsertScopeProfileItem: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for upsertScopeProfileItem");
      if (!body)
        throw new Error("requetBody is required for upsertScopeProfileItem");

      return fetch(`${this.base}/scopes/${scopeId}/profileForm`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete scope&#x27;s profile form item
     *
     * @param {DeleteScopeProfileItemRequest} req deleteScopeProfileItem request
     */
    deleteScopeProfileItem: req => {
      const { scopeId, name } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeProfileItem");
      if (!name) throw new Error("name is required for deleteScopeProfileItem");

      return fetch(`${this.base}/scopes/${scopeId}/profileForm/${name}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * provider's methods
   */
  provider = {
    /**
     * Create scope provider
     *
     * @param {CreateScopeProviderRequest} req createScopeProvider request
     * @returns {Promise<CreateScopeProviderResponse>} The provider created
     */
    createScopeProvider: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for createScopeProvider");
      if (!body)
        throw new Error("requetBody is required for createScopeProvider");

      return fetch(`${this.base}/scopes/${scopeId}/providers`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope providers
     *
     * @param {ListScopeProvidersRequest} req listScopeProviders request
     * @returns {Promise<ListScopeProvidersResponse>} A paged array of providers
     */
    listScopeProviders: req => {
      const { scopeId, query } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeProviders");

      return fetch(`${this.base}/scopes/${scopeId}/providers`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get provider by id
     *
     * @param {GetScopeProviderRequest} req getScopeProvider request
     * @returns {Promise<GetScopeProviderResponse>} The provider with given id
     */
    getScopeProvider: req => {
      const { scopeId, providerId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeProvider");
      if (!providerId)
        throw new Error("providerId is required for getScopeProvider");

      return fetch(`${this.base}/scopes/${scopeId}/providers/${providerId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update provider
     *
     * @param {UpdateScopeProviderRequest} req updateScopeProvider request
     * @returns {Promise<UpdateScopeProviderResponse>} The provider
     */
    updateScopeProvider: req => {
      const { scopeId, providerId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeProvider");
      if (!providerId)
        throw new Error("providerId is required for updateScopeProvider");
      if (!body)
        throw new Error("requetBody is required for updateScopeProvider");

      return fetch(`${this.base}/scopes/${scopeId}/providers/${providerId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete provider
     *
     * @param {DeleteScopeProviderRequest} req deleteScopeProvider request
     */
    deleteScopeProvider: req => {
      const { scopeId, providerId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeProvider");
      if (!providerId)
        throw new Error("providerId is required for deleteScopeProvider");

      return fetch(`${this.base}/scopes/${scopeId}/providers/${providerId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List providers without token
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
     * list profiles by provider id
     *
     * @param {ListProfilesRequest} req listProfiles request
     * @returns {Promise<ListProfilesResponse>} The profiles with given provider id
     */
    listProfiles: req => {
      const { scopeId, providerId, query } = req || {};

      if (!scopeId) throw new Error("scopeId is required for listProfiles");
      if (!providerId)
        throw new Error("providerId is required for listProfiles");

      return fetch(
        `${this.base}/scopes/${scopeId}/providers/${providerId}/profiles`,
        {
          method: "GET",
          query,
          headers: { Authorization: this.auth },
        }
      );
    },
  };
  /**
   * app's methods
   */
  app = {
    /**
     * Create scope app
     *
     * @param {CreateScopeAppRequest} req createScopeApp request
     * @returns {Promise<CreateScopeAppResponse>} The app created
     */
    createScopeApp: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for createScopeApp");
      if (!body) throw new Error("requetBody is required for createScopeApp");

      return fetch(`${this.base}/scopes/${scopeId}/apps`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope apps
     *
     * @param {ListScopeAppsRequest} req listScopeApps request
     * @returns {Promise<ListScopeAppsResponse>} A paged array of apps
     */
    listScopeApps: req => {
      const { scopeId, query } = req || {};

      if (!scopeId) throw new Error("scopeId is required for listScopeApps");

      return fetch(`${this.base}/scopes/${scopeId}/apps`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get scope app by id
     *
     * @param {GetScopeAppRequest} req getScopeApp request
     * @returns {Promise<GetScopeAppResponse>} The app with given id
     */
    getScopeApp: req => {
      const { scopeId, appId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeApp");
      if (!appId) throw new Error("appId is required for getScopeApp");

      return fetch(`${this.base}/scopes/${scopeId}/apps/${appId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope app
     *
     * @param {UpdateScopeAppRequest} req updateScopeApp request
     * @returns {Promise<UpdateScopeAppResponse>} The provider
     */
    updateScopeApp: req => {
      const { scopeId, appId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScopeApp");
      if (!appId) throw new Error("appId is required for updateScopeApp");
      if (!body) throw new Error("requetBody is required for updateScopeApp");

      return fetch(`${this.base}/scopes/${scopeId}/apps/${appId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete scope app
     *
     * @param {DeleteScopeAppRequest} req deleteScopeApp request
     */
    deleteScopeApp: req => {
      const { scopeId, appId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for deleteScopeApp");
      if (!appId) throw new Error("appId is required for deleteScopeApp");

      return fetch(`${this.base}/scopes/${scopeId}/apps/${appId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * namespace's methods
   */
  namespace = {
    /**
     * Create scope namespace
     *
     * @param {CreateScopeNamespaceRequest} req createScopeNamespace request
     * @returns {Promise<CreateScopeNamespaceResponse>} The namespace created
     */
    createScopeNamespace: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for createScopeNamespace");
      if (!body)
        throw new Error("requetBody is required for createScopeNamespace");

      return fetch(`${this.base}/scopes/${scopeId}/namespaces`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope namespaces
     *
     * @param {ListScopeNamespacesRequest} req listScopeNamespaces request
     * @returns {Promise<ListScopeNamespacesResponse>} A paged array of namespaces
     */
    listScopeNamespaces: req => {
      const { scopeId, query } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeNamespaces");
      if (!query) throw new Error("query is required for namespace");

      return fetch(`${this.base}/scopes/${scopeId}/namespaces`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get Scope namespace by id
     *
     * @param {GetScopeNamespaceRequest} req getScopeNamespace request
     * @returns {Promise<GetScopeNamespaceResponse>} The namespace with given id
     */
    getScopeNamespace: req => {
      const { scopeId, namespaceId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for getScopeNamespace");
      if (!namespaceId)
        throw new Error("namespaceId is required for getScopeNamespace");

      return fetch(`${this.base}/scopes/${scopeId}/namespaces/${namespaceId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update scope namespace
     *
     * @param {UpdateScopeNamespaceRequest} req updateScopeNamespace request
     * @returns {Promise<UpdateScopeNamespaceResponse>} The namespace
     */
    updateScopeNamespace: req => {
      const { scopeId, namespaceId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeNamespace");
      if (!namespaceId)
        throw new Error("namespaceId is required for updateScopeNamespace");
      if (!body)
        throw new Error("requetBody is required for updateScopeNamespace");

      return fetch(`${this.base}/scopes/${scopeId}/namespaces/${namespaceId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete Scope namespace
     *
     * @param {DeleteScopeNamespaceRequest} req deleteScopeNamespace request
     */
    deleteScopeNamespace: req => {
      const { scopeId, namespaceId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeNamespace");
      if (!namespaceId)
        throw new Error("namespaceId is required for deleteScopeNamespace");

      return fetch(`${this.base}/scopes/${scopeId}/namespaces/${namespaceId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
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
     * Create scope user
     *
     * @param {CreateScopeUserRequest} req createScopeUser request
     * @returns {Promise<CreateScopeUserResponse>} The user created
     */
    createScopeUser: req => {
      const { scopeId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for createScopeUser");
      if (!body) throw new Error("requetBody is required for createScopeUser");

      return fetch(`${this.base}/scopes/${scopeId}/users`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List scope users
     *
     * @param {ListScopeUsersRequest} req listScopeUsers request
     * @returns {Promise<ListScopeUsersResponse>} A paged array of users
     */
    listScopeUsers: req => {
      const { scopeId, query } = req || {};

      if (!scopeId) throw new Error("scopeId is required for listScopeUsers");

      return fetch(`${this.base}/scopes/${scopeId}/users`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get Scope user by id
     *
     * @param {GetScopeUserRequest} req getScopeUser request
     * @returns {Promise<GetScopeUserResponse>} The user with given id
     */
    getScopeUser: req => {
      const { scopeId, userId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeUser");
      if (!userId) throw new Error("userId is required for getScopeUser");

      return fetch(`${this.base}/scopes/${scopeId}/users/${userId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update Scope user
     *
     * @param {UpdateScopeUserRequest} req updateScopeUser request
     * @returns {Promise<UpdateScopeUserResponse>} The user
     */
    updateScopeUser: req => {
      const { scopeId, userId, body } = req || {};

      if (!scopeId) throw new Error("scopeId is required for updateScopeUser");
      if (!userId) throw new Error("userId is required for updateScopeUser");
      if (!body) throw new Error("requetBody is required for updateScopeUser");

      return fetch(`${this.base}/scopes/${scopeId}/users/${userId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete Scope user
     *
     * @param {DeleteScopeUserRequest} req deleteScopeUser request
     */
    deleteScopeUser: req => {
      const { scopeId, userId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for deleteScopeUser");
      if (!userId) throw new Error("userId is required for deleteScopeUser");

      return fetch(`${this.base}/scopes/${scopeId}/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
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

      return fetch(`${this.base}/users/!register`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * third register user
     *
     * @param {ThirdRegisterUserRequest} req thirdRegisterUser request
     * @returns {Promise<ThirdRegisterUserResponse>} The user register
     */
    thirdRegisterUser: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for thirdRegisterUser");

      return fetch(`${this.base}/users/!thirdRegister`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * bind user
     *
     * @param {BindUserRequest} req bindUser request
     * @returns {Promise<BindUserResponse>} The bind user
     */
    bindUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for bindUser");

      return fetch(`${this.base}/users/!bind`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * reset password
     *
     * @param {ResetPasswordRequest} req resetPassword request
     * @returns {Promise<ResetPasswordResponse>} The forget pwd user
     */
    resetPassword: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for resetPassword");

      return fetch(`${this.base}/users/password/!reset`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * session's methods
   */
  session = {
    /**
     * List scope sessions
     *
     * @param {ListScopeSessionsRequest} req listScopeSessions request
     * @returns {Promise<ListScopeSessionsResponse>} A paged array of session
     */
    listScopeSessions: req => {
      const { scopeId, query } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeSessions");

      return fetch(`${this.base}/scopes/${scopeId}/sessions`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get Scope session
     *
     * @param {GetScopeSessionRequest} req getScopeSession request
     * @returns {Promise<GetScopeSessionResponse>} The session with given id
     */
    getScopeSession: req => {
      const { scopeId, sessionId } = req || {};

      if (!scopeId) throw new Error("scopeId is required for getScopeSession");
      if (!sessionId)
        throw new Error("sessionId is required for getScopeSession");

      return fetch(`${this.base}/scopes/${scopeId}/sessions/${sessionId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update Scope session
     *
     * @param {UpdateScopeSessionRequest} req updateScopeSession request
     * @returns {Promise<UpdateScopeSessionResponse>} The scope session
     */
    updateScopeSession: req => {
      const { scopeId, sessionId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeSession");
      if (!sessionId)
        throw new Error("sessionId is required for updateScopeSession");
      if (!body)
        throw new Error("requetBody is required for updateScopeSession");

      return fetch(`${this.base}/scopes/${scopeId}/sessions/${sessionId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete Scope session
     *
     * @param {DeleteScopeSessionRequest} req deleteScopeSession request
     */
    deleteScopeSession: req => {
      const { scopeId, sessionId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeSession");
      if (!sessionId)
        throw new Error("sessionId is required for deleteScopeSession");

      return fetch(`${this.base}/scopes/${scopeId}/sessions/${sessionId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
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
     * Create Scope invitation 生成邀请码
     *
     * @param {CreateScopeInvitationRequest} req createScopeInvitation request
     * @returns {Promise<CreateScopeInvitationResponse>} The invitation created
     */
    createScopeInvitation: req => {
      const { scopeId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for createScopeInvitation");
      if (!body)
        throw new Error("requetBody is required for createScopeInvitation");

      return fetch(`${this.base}/scopes/${scopeId}/invitations`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List Scope invitations
     *
     * @param {ListScopeInvitationsRequest} req listScopeInvitations request
     * @returns {Promise<ListScopeInvitationsResponse>} A paged array of invitations
     */
    listScopeInvitations: req => {
      const { scopeId, query } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for listScopeInvitations");

      return fetch(`${this.base}/scopes/${scopeId}/invitations`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get Scope invitation
     *
     * @param {GetScopeInvitationRequest} req getScopeInvitation request
     * @returns {Promise<GetScopeInvitationResponse>} The invitation with given id
     */
    getScopeInvitation: req => {
      const { scopeId, invitationId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for getScopeInvitation");
      if (!invitationId)
        throw new Error("invitationId is required for getScopeInvitation");

      return fetch(
        `${this.base}/scopes/${scopeId}/invitations/${invitationId}`,
        {
          method: "GET",
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * Update Scope invitation
     *
     * @param {UpdateScopeInvitationRequest} req updateScopeInvitation request
     * @returns {Promise<UpdateScopeInvitationResponse>} The scope invitation
     */
    updateScopeInvitation: req => {
      const { scopeId, invitationId, body } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for updateScopeInvitation");
      if (!invitationId)
        throw new Error("invitationId is required for updateScopeInvitation");
      if (!body)
        throw new Error("requetBody is required for updateScopeInvitation");

      return fetch(
        `${this.base}/scopes/${scopeId}/invitations/${invitationId}`,
        {
          method: "PUT",
          body,
          headers: { Authorization: this.auth },
        }
      );
    },
    /**
     * Delete Scope invitation
     *
     * @param {DeleteScopeInvitationRequest} req deleteScopeInvitation request
     */
    deleteScopeInvitation: req => {
      const { scopeId, invitationId } = req || {};

      if (!scopeId)
        throw new Error("scopeId is required for deleteScopeInvitation");
      if (!invitationId)
        throw new Error("invitationId is required for deleteScopeInvitation");

      return fetch(
        `${this.base}/scopes/${scopeId}/invitations/${invitationId}`,
        {
          method: "DELETE",
          headers: { Authorization: this.auth },
        }
      );
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

      return fetch(`${this.base}/invitations/${code}/!validate`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
}

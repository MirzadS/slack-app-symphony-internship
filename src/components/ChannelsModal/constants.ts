const ERROR_MSG = {
    name_taken: 'A channel cannot be created with the given name.',
    restricted_action: 'A team preference prevents the authenticated user from creating channels.',
    no_channel: 'Value passed for name was empty.',
    missing_scope: 'The token used is not granted the specific scope permissions required to complete this request.',
    invalid_name_required: 'Value passed for name was empty.',
    invalid_name_punctuation: 'Value passed for name contained only punctuation.',
    invalid_name_maxlength: 'Value passed for name exceeded max length.',
    invalid_name_specials: 'Value passed for name contained unallowed special characters or upper case characters.',
    invalid_name: 'Value passed for name was invalid.',
    too_many_convos_for_team: 'The workspace has exceeded its limit of public and private channels.',
    too_many_convos_for_app_on_team: 'This app has exceeded its per-workspace limit of public and private channels.',
    cannot_create_channel: 'This channel is unable to be created.',
    missing_argument: 'A required argument is missing.',
    not_authed: 'No authentication token provided.',
    invalid_auth:
        'Some aspect of authentication cannot be validated. Either the provided token is invalid or the request originates from an IP address disallowed from making the request.',
    access_denied: 'Access to a resource specified in the request is denied.',
    account_inactive: 'Authentication token is for a deleted user or workspace when using a bot token.',
    token_revoked:
        'Authentication token is for a deleted user or workspace or the app has been removed when using a user token.',
    token_expired: 'Authentication token has expired',
    no_permission:
        'The workspace token used in this request does not have the permissions necessary to complete the request. Make sure your app is a member of the conversation it"s attempting to post a message to.',
    org_login_required:
        'The workspace is undergoing an enterprise migration and will not be available until migration is complete.',
    ekm_access_denied: 'Administrators have suspended the ability to post a message.',
    not_allowed_token_type: 'The token type used in this request is not allowed.',
    method_deprecated: 'The method has been deprecated.',
    deprecated_endpoint: 'The endpoint has been deprecated.',
    two_factor_setup_required: 'Two factor setup is required.',
    enterprise_is_restricted: 'The method cannot be called from an Enterprise.',
    is_bot: 'This method cannot be called by a bot user.',
    user_is_ultra_restricted: 'This method cannot be called by a single channel guest.',
    team_access_not_granted:
        'The token used is not granted the specific workspace access required to complete this request.',
    invalid_arguments:
        'The method was either called with invalid arguments or some detail about the arguments passed are invalid, which is more likely when using complex arguments like blocks or attachments.',
    invalid_arg_name:
        'The method was passed an argument whose name falls outside the bounds of accepted or expected values. This includes very long names and names with non-alphanumeric characters other than _. If you get this error, it is typically an indication that you have made a very malformed API call.',
    invalid_array_arg: 'The method was passed an array as an argument. Please only input valid strings.',
    invalid_charset:
        'The method was called via a POST request, but the charset specified in the Content-Type header was invalid. Valid charset names are: utf-8 iso-8859-1.',
    invalid_form_data:
        'The method was called via a POST request with Content-Type application/x-www-form-urlencoded or multipart/form-data, but the form data was either missing or syntactically invalid.',
    invalid_post_type:
        'The method was called via a POST request, but the specified Content-Type was invalid. Valid types are: application/json application/x-www-form-urlencoded multipart/form-data text/plain.',
    missing_post_type:
        'The method was called via a POST request and included a data payload, but the request did not include a Content-Type header.',
    team_added_to_org:
        'The workspace associated with your request is currently undergoing migration to an Enterprise Organization. Web API and other platform operations will be intermittently unavailable until the transition is complete.',
    ratelimited: 'The request has been ratelimited. Refer to the Retry-After header for when to retry the request.',
    accesslimited: 'Access to this method is limited on the current network',
    request_timeout: 'The method was called via a POST request, but the POST data was either missing or truncated.',
    service_unavailable: 'The service is temporarily unavailable',
    fatal_error:
        'The server could not complete your operation(s) without encountering a catastrophic error. It"s possible some aspect of the operation succeeded before the error was raised.',
    internal_error:
        'The server could not complete your operation(s) without encountering an error, likely due to a transient issue on our end. It"s possible some aspect of the operation succeeded before the error was raised.',
    other: 'An error occurred while processing your request. Please try again.',
};

export default ERROR_MSG;

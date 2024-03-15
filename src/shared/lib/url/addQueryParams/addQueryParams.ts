/**
 *      @param getQueryParams
 *          generate query string param for "window.history.pushState", which get from
 *          arg params: OptionalRecord<string, string>
 *
 *      @param addQueryParams
 *          Passed a string from getQueryParams to "window.history.pushState"
 *
 *      @param params
 *          get obj with optional key<str>, value<str> which will added in "window.history.pushState". Is return to
 *          url query params as: "?key=value&key2=value2"
 */

export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParam = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParam.set(name, value);
    }
  });

  return `?${searchParam.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}

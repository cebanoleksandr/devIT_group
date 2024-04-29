export const getBase64FromUrl = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = '';
  bytes.forEach(byte => binary += String.fromCharCode(byte));
  return `data:${response.headers.get('content-type')};base64,${btoa(binary)}`;
}

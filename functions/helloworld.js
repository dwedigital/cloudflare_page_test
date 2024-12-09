export function onRequest(context){
  return new Response({'message':'Hey there! This is a simple response from a Cloudflare Worker.'})
}
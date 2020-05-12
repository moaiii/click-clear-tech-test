export default async (url: string | undefined, callBack: Function) => {
  if (url) {
    const res = await fetch(url);
    const json = await res.json();
    callBack(json);
  }
}
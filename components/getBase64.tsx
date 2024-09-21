import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (img:string) => {
    const buffer = await fetch(img).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    let { base64 } = await getPlaiceholder(buffer);
    return base64;
};

import client from "./client";
import ImageUrlbuilder from "@sanity/image-url";

const builder = ImageUrlbuilder(client);

export const urlFor = (source) => builder.image(source);

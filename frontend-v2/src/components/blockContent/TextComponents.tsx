import { urlFor } from "../../modules/urlFor";

import { CodeBlock, dracula, obsidian } from "react-code-blocks";

import Image from "next/image";

import styles from "./TextComponents.module.scss";

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image alt={""} width={1280} height={720} src={urlFor(value).url()} />
      );
    },
    annotatedImage: ({ value }: any) => {
      return (
        <div className={styles.annotatedImage}>
          <Image
            width={1280}
            height={720}
            src={urlFor(value.image).url()}
            alt={value.alt}
          />
          <p>{value.text}</p>
        </div>
      );
    },
    codeBlock: ({ value }: any) => {
      return (
        <div className={styles.codeBlockContainer}>
          <CodeBlock
            text={value.code.code}
            language={value.code.language}
            showLineNumbers={true}
            theme={obsidian}
          />
        </div>
      );
    },
  },
};

export { ptComponents };

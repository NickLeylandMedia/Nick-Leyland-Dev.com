import { urlFor } from "../../modules/urlFor";

import { CodeBlock, dracula, obsidian } from "react-code-blocks";

import styles from "./TextComponents.module.scss";

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return <img src={urlFor(value).url()} />;
    },
    annotatedImage: ({ value }: any) => {
      return (
        <div className={styles.annotatedImage}>
          <img src={urlFor(value.image).url()} alt={value.alt} />
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

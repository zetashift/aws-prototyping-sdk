/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
/**
 * Supported languages for runtimes and infrastructure
 */
export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",
}

/**
 * Supported libraries for code generation
 */
export enum Library {
  TYPESCRIPT_REACT_QUERY_HOOKS = "typescript-react-query-hooks",
}

/**
 * Formats for documentation generation
 */
export enum DocumentationFormat {
  /**
   * HTML Documentation generated by redoc
   * @see https://github.com/Redocly/redoc
   */
  HTML_REDOC = "html_redoc",
  /**
   * OpenAPI Generator 'html2' documentation
   * @see https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/html2.md
   */
  HTML2 = "html2",
  /**
   * OpenAPI Generator 'markdown' documentation
   * @see https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/markdown.md
   */
  MARKDOWN = "markdown",
  /**
   * OpenAPI Generator 'plantuml' documentation
   * @see https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/plantuml.md
   */
  PLANTUML = "plantuml",
}

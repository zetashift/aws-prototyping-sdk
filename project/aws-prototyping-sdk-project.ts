import { Project } from 'projen';
import { Maturity, PDKProject } from "../internal/pdk-project/src";

const filesGlobsToKeep = [
    "node_modules",
    ".git*",
    ".npm*",
    ".projen", 
    "LICENSE", 
    "README.md", 
    "tsconfig.dev.json",
    "tsconfig.json", 
    "package.json"];

export class AwsPrototypingSdkProject extends PDKProject {
    constructor(parent: Project) {
        super({
            parent,
            author: "AWS APJ COPE",
            authorAddress: "apj-cope@amazon.com",
            defaultReleaseBranch: "mainline",
            name: "aws-prototyping-sdk",
            keywords: ["aws", "pdk", "jsii", "projen"],
            eslint: false,
            prettier: false,
            repositoryUrl: "https://github.com/aws/aws-prototyping-sdk",
            devDeps: ["@aws-prototyping-sdk/nx-monorepo@0.0.0", "@aws-prototyping-sdk/pipeline@0.0.0", "@aws-prototyping-sdk/build-tools@0.0.0", "projen"],
            peerDeps: ["projen", "constructs", "aws-cdk-lib"],
            deps: ["projen", "constructs", "aws-cdk-lib"],
            maturity: Maturity.STABLE,
            sampleCode: false,
            excludeTypescript: ["**/samples/**"],
            outdir: ".",
            publishToPypiConfig: {
              distName: `aws_prototyping_sdk`,
              module: `aws_prototyping_sdk`,
            },
            publishToMavenConfig: {
              mavenEndpoint: 'https://aws.oss.sonatype.org',
              mavenGroupId: 'software.aws.awsprototypingsdk',
              mavenArtifactId: `aws-prototyping-sdk`,
              javaPackage: `software.aws.awsprototypingsdk`,
            },
            gitignore: ["*", ...filesGlobsToKeep.map(f => `!${f}`)],
          });

          const cleanTask = this.addTask("clean", {
            exec: `find . -maxdepth 1 ${[".", "..", "dist", ...filesGlobsToKeep].map(f => `! -name "${f}"`).join(" ")} -exec rm -rf {} \\;`
          });

          this.preCompileTask.spawn(cleanTask);
          this.preCompileTask.exec("ubergen");
          this.package.addField("ubergen", {
            "exclude": true,
            "excludeExperimentalModules": true
          });
          this.package.addField("main", "./index.js");
          this.package.addField("types", "./index.d.ts");
          this.package.manifest.jsii.tsc.rootDir = ".";
          this.package.manifest.jsii.tsc.outDir = ".";
    }
}
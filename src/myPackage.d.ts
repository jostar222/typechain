//declaration file(선언 파일)
interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config:Config):boolean;
  function exit(code:number):number;
}
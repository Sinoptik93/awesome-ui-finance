// declaration.d.ts
declare module "*.scss" {
  const content: { [key: string]: string };
  export default content;
}

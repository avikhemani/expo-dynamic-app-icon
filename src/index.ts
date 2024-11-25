import ExpoDynamicAppIconModule from "./ExpoDynamicAppIconModule";

export function setAppIcon(name: string, defaultIcon: string): string | false {
  return ExpoDynamicAppIconModule.setAppIcon(name, defaultIcon);
}

export function getAppIcon(): string {
  return ExpoDynamicAppIconModule.getAppIcon();
}
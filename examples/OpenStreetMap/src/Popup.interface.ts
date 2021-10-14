export type PopupId = string;

export type PopupCommands = InitPopupCommand;

export interface InitPopupCommand {
  method: "constructor";
  data: void;
}

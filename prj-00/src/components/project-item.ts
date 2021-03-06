import { Component } from "./base-component.js";
import { autobind } from "../decorators/autobind.js";
import { Project } from "../models/project.js";
import { Draggable } from "../models/drag-drop.js";

// ProjectItem Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;

  get persons() {
    return this.project.people === 1
      ? "1 person"
      : `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
    console.log(event);
  }
  @autobind
  dragEndHandler(event: DragEvent) {
    console.log("DRAG END");
    console.log(event);
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector("h2")!.innerHTML = this.project.title;
    this.element.querySelector("h3")!.innerHTML = this.persons + " assigned";
    this.element.querySelector("p")!.innerHTML = this.project.description;
  }
}

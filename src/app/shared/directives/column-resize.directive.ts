import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[naoColumnResize]',
  standalone: true,
})
export class ColumnResizeDirective implements OnInit {
  @Input() minWidth: number = 100;
  @Input() maxWidth?: number;

  private resizing: boolean = false;
  private startX!: number;
  private initialWidth!: number;
  private dragHandle: any;
  private initialTableWidth!: number;
  private table: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.createDragHandle();
    this.table = this.findParentTable(el.nativeElement);
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement, "width", `${this.minWidth}px`);
  }

  createDragHandle() {
    this.dragHandle = this.renderer.createElement('div');
    this.renderer.addClass(this.dragHandle, 'resize-handle');
    this.renderer.setStyle(this.dragHandle, 'right', '-2px');
    this.renderer.setStyle(this.dragHandle, 'position', 'absolute');
    this.renderer.setStyle(this.dragHandle, 'cursor', 'col-resize');
    this.renderer.setStyle(this.dragHandle, 'top', '0');
    this.renderer.setStyle(this.dragHandle, 'bottom', '0');
    this.renderer.setStyle(this.dragHandle, 'width', '4px');
    this.renderer.setStyle(this.dragHandle, 'z-index', '100');
    this.renderer.setStyle(this.dragHandle, 'background', 'deeppink');
    this.renderer.appendChild(this.el.nativeElement, this.dragHandle);
  }
  
  findParentTable(element: HTMLElement): HTMLElement {
    let currentNode = element.parentNode;
    while (currentNode && currentNode.nodeName !== "TABLE") {
      currentNode = currentNode.parentNode;
    }
    return currentNode as HTMLElement;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (event.target !== this.dragHandle) return;
    this.startX = event.pageX;
    this.initialWidth = this.el.nativeElement.clientWidth;
    this.initialTableWidth = this.table.clientWidth;
    this.resizing = true;

    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.resizing) return;

    const movementX = event.pageX - this.startX;
    let newWidth = this.initialWidth + movementX;

    if (newWidth < this.minWidth) {
      newWidth = this.minWidth;
    }

    if (this.maxWidth && newWidth > this.maxWidth) {
      newWidth = this.maxWidth;
    }

    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
    
    const widthDifference = newWidth - this.initialWidth;
    const updatedTableWidth = this.initialTableWidth + widthDifference;
    this.renderer.setStyle(this.table, "width", `${updatedTableWidth}px`);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    if (!this.resizing) return;
    this.resizing = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-iframe-viewer',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './iframe-viewer.component.html',
  styleUrls: ['./iframe-viewer.component.scss']
})
export class IframeViewerComponent implements OnInit {
  @Input() url: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
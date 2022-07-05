import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  @Output() public likedWidgetComponent = new EventEmitter<void>();
  @Input() public likesWidgetComponent = 0;
  @Input() public id = null;
  public fonts = {faThumbsUp}

  constructor(private uniqueIdService: UniqueIdService) { }

  ngOnInit(): void {
    if (!this.id){
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget')
    }
  }

  public likeWidgetComponentClik(): void{
    this.likedWidgetComponent.emit();
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';


@Component({
	moduleId: module.id.toString(),
	templateUrl: 'item2.component.html',
	styleUrls: ['item2.component.css']
})

export class Item2Component implements OnInit {
	images;

	@Input() datasource;
	   	selectedImage;
	 
   	setSelectedImage(image){
      	this.selectedImage = image;
  	}


	currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.images = [
		  	{
			    "title": "Central Park",
			    "url": "http://farm9.static.flickr.com/8487/8171013397_761d7d9477.jpg",
			    "date": "Thu, 20 Dec 2012 18:53:00 -0500",
			    "id": 0
		  	},
		  	{
			    "title": "Gondola",
			    "url": "http://farm9.static.flickr.com/8030/7937306302_343c3dfe6e.jpg",
			    "date": "Sat, 08 Sep 2012 12:32:21 -0400",
			    "id": 1
		  	},
		  	{
			    "title": "Lavender Dreams",
			    "url": "http://farm6.static.flickr.com/5039/5855383215_43dbd8d025.jpg",
			    "date": "Tue, 21 Jun 2011 01:58:38 -0400",
			    "id": 2
		  	},
		  	{
			    "title": "feel",
			    "url": "http://farm5.static.flickr.com/4090/4846031148_d4736f8673.jpg",
			    "date": "Sat, 31 Jul 2010 05:07:17 -0400",
			    "id": 3
		  	},
		  	{
			    "title": "Old South",
			    "url": "http://farm4.static.flickr.com/3352/3249768601_2807faafb3.jpg",
			    "date": "Tue, 03 Feb 2009 08:11:49 -0500",
			    "id": 4
		  	},
		  	{
			    "title": "Autumn Hillside",
			    "url": "http://farm3.static.flickr.com/2810/10543879936_b7ff128f46.jpg",
			    "date": "Mon, 28 Oct 2013 17:33:02 -0400",
			    "id": 5
		  	},
		  	{
			    "title": "Autumn in Irati",
			    "url": "http://farm7.static.flickr.com/6045/6308896948_efae80e17b.jpg",
			    "date": "Thu, 03 Nov 2011 06:46:15 -0400",
			    "id": 6
		  	},
		  	{
			    "title": "...",
			    "url": "http://farm5.static.flickr.com/4129/5216006296_2e570488fe.jpg",
			    "date": "Sun, 28 Nov 2010 17:25:41 -0500",
			    "id": 7
		  	},
		  	{
			    "title": "From a summer walk",
			    "url": "http://farm6.static.flickr.com/5514/11970859236_01607cb12f.jpg",
			    "date": "Wed, 15 Jan 2014 17:45:51 -0500",
			    "id": 8
		  	},
		  	{
			    "title": "Sometimes your only available transportation is a leap of faith",
			    "url": "http://farm4.static.flickr.com/3692/9829915423_fc6cda331b.jpg",
			    "date": "Thu, 19 Sep 2013 23:36:34 -0400",
			    "id": 9
		  	},
		  	{
			    "title": "Good Job!",
			    "url": "http://farm3.staticflickr.com/2339/2245983695_7a106704ac_b.jpg",
			    "date": "Wed, 26 Feb 2014 20:32:00 -0400",
			    "id": 10
		  	},
		  	{
			    "title": "Very Calm",
			    "url": "http://farm8.static.flickr.com/7411/8727352568_ae9f9016b6.jpg",
			    "date": "Fri, 10 May 2013 17:37:10 -0400",
			    "id": 11
		  	},
		  	{
			    "title": "Luminous journey through the clouds",
			    "url": "http://farm5.static.flickr.com/4120/4759731675_383480ce0c.jpg",
			    "date": "Sun, 04 Jul 2010 08:35:14 -0400",
			    "id": 12
		  	},
		  	{
			    "title": "Rock Star",
			    "url": "http://farm4.static.flickr.com/3336/3225809082_452dde9eb6.jpg",
			    "date": "Sun, 25 Jan 2009 11:06:49 -0500",
			    "id": 13
		  	},
		  	{
			    "title": "Paris - TrocadÃƒÂ©ro - 24-12-2007 - 21h33",
			    "url": "http://farm3.static.flickr.com/2065/2150848285_eebb905504.jpg",
			    "date": "Mon, 31 Dec 2007 03:59:54 -0500",
			    "id": 14
		  	},
		  	{
			    "title": "Endlessly [Explored]",
			    "url": "http://farm8.static.flickr.com/7052/6929474255_3e95f17845.jpg",
			    "date": "Sat, 25 Feb 2012 16:32:16 -0500",
			    "id": 15
		  	},
		  	{
			    "title": "The sunlight on the garden",
			    "url": "http://farm4.static.flickr.com/3140/2694042772_73f12ed70d.jpg",
			    "date": "Tue, 22 Jul 2008 17:35:16 -0400",
			    "id": 16
		  	},
		  	{
			    "title": "Last Light",
			    "url": "http://farm6.static.flickr.com/5492/9537611403_ffab22359b.jpg",
			    "date": "Sun, 18 Aug 2013 13:29:45 -0400",
			    "id": 17
		  	},
		  	{
			    "title": "Softly the evening came",
			    "url": "http://farm9.static.flickr.com/8416/8705306787_82786d5873.jpg",
			    "date": "Fri, 03 May 2013 22:03:27 -0400",
			    "id": 18
		  	},
		  	{
			    "title": "Untitled",
			    "url": "http://farm6.static.flickr.com/5232/8412014762_18b99dfafd.jpg",
			    "date": "Fri, 25 Jan 2013 10:45:06 -0500",
			    "id": 19
		  	}
		];
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
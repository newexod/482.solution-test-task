import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
	moduleId: module.id.toString(),
	templateUrl: 'item1.component.html',
	styleUrls: ['item1.component.css']
})


export class Item1Component implements OnInit {
	images;

	@Input() datasource;
	   	selectedImage;
	 
   	setSelectedImage(image){
      	this.selectedImage= image;
  	}

	currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.images = [
			{
			    "title": "Blue river (much better in original size - press)",
			    "url": "http://farm9.static.flickr.com/8305/7893507666_0d25cd9f30.jpg",
			    "date": "Thu, 30 Aug 2012 10:41:00 -0400",
			    "id": 0
			},
			{
			    "title": "Dangerously beautiful paths",
			    "url": "http://farm8.static.flickr.com/7275/7550745422_3e323cd79e.jpg",
			    "date": "Thu, 12 Jul 2012 03:27:00 -0400",
			    "id": 1
			},
			{
			    "title": "Silver curve - Please view on black",
			    "url": "http://farm8.static.flickr.com/7006/6453535439_b6ac71d303.jpg",
			    "date": "Mon, 05 Dec 2011 11:18:00 -0500",
			    "id": 2
			},
			{
			    "title": "Late sun",
			    "url": "http://farm7.static.flickr.com/6221/6318336935_d6d54f85f6.jpg",
			    "date": "Sun, 06 Nov 2011 10:52:00 -0500",
			    "id": 3
			},
			{
			    "title": "Is it missing something?",
			    "url": "http://farm7.static.flickr.com/6050/6279664899_f411cfb402.jpg",
			    "date": "Tue, 25 Oct 2011 10:12:02 -0400",
			    "id": 4
			},
			{
			    "title": "A Walk to Remember",
			    "url": "http://farm5.static.flickr.com/4111/5113981192_4e74ef57e6.jpg",
			    "date": "Tue, 26 Oct 2010 13:33:00 -0400",
			    "id": 5
			},
			{
			    "title": "Bale Of Straw II",
			    "url": "http://farm3.static.flickr.com/2640/3820792462_7ab06cea5e.jpg",
			    "date": "Fri, 14 Aug 2009 10:49:49 -0400",
			    "id": 6
			},
			{
			    "title": "World above clouds",
			    "url": "http://farm8.static.flickr.com/7016/6399710385_8e435d2c73.jpg",
			    "date": "Fri, 29 Jan 2010 02:28:00 -0500",
			    "id": 7
			},
			{
			    "title": "Impressions d'automne - Fall impressions",
			    "url": "http://farm2.static.flickr.com/1066/5109663877_bec5467bb2.jpg",
			    "date": "Sun, 24 Oct 2010 06:35:17 -0400",
			    "id": 8
			},
			{
			    "title": "Bridge",
			    "url": "http://farm8.static.flickr.com/7266/7452173966_1dd42c4c04.jpg",
			    "date": "Sat, 21 Jul 2012 13:40:00 -0400",
			    "id": 9
			},
			{
			    "title": "Mountain stream",
			    "url": "http://farm8.static.flickr.com/7001/6525344811_ac598c814b.jpg",
			    "date": "Wed, 18 Aug 2010 03:00:00 -0400",
			    "id": 10
			},
			{
			    "title": "Good Morning Angkor! :: HDR",
			    "url": "http://farm3.static.flickr.com/2552/4055450688_a52be7a5dc.jpg",
			    "date": "Thu, 29 Oct 2009 06:22:16 -0400",
			    "id": 11
			},
			{
			    "title": "It's Been Too Long",
			    "url": "http://farm4.static.flickr.com/3213/2912152462_9cf11eb88e.jpg",
			    "date": "Sat, 04 Oct 2008 09:05:57 -0400",
			    "id": 12
			},
			{
			    "title": "I scream, you scream..",
			    "url": "http://farm4.static.flickr.com/3068/2620294301_2522a015f5.jpg",
			    "date": "Sun, 29 Jun 2008 08:55:13 -0400",
			    "id": 13
			},
			{
			    "title": "Summer IR",
			    "url": "http://farm4.static.flickr.com/3712/9013091504_d7b4c0974b.jpg",
			    "date": "Tue, 18 Jun 2013 11:11:03 -0400",
			    "id": 14
			},
			{
			    "title": "West Side",
			    "url": "http://farm9.static.flickr.com/8340/8171073328_2dc7bbd5e8.jpg",
			    "date": "Fri, 09 Nov 2012 22:52:11 -0500",
			    "id": 15
			},
			{
			    "title": "The San Remo",
			    "url": "http://farm8.static.flickr.com/7246/7452172852_8e60014a4b.jpg",
			    "date": "Wed, 27 Jun 2012 14:58:03 -0400",
			    "id": 16
			},
			{
			    "title": "Hola!",
			    "url": "http://farm4.static.flickr.com/3410/3253055069_40d8a1c005.jpg",
			    "date": "Wed, 04 Feb 2009 13:18:20 -0500",
			    "id": 17
			},
			{
			    "title": "A Walk in The Fog",
			    "url": "http://farm4.static.flickr.com/3097/3124754678_f9f38584b7.jpg",
			    "date": "Mon, 27 Jul 2009 03:49:44 -0400",
			    "id": 18
			},
			{
			    "title": "The gateway... to your dreams",
			    "url": "http://farm4.static.flickr.com/3213/2888886521_e6b05927ff.jpg",
			    "date": "Fri, 26 Sep 2008 04:36:02 -0400",
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
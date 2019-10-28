import React, { Component } from 'react';

/* Images */
import defaultImg from '../assets/imgs/no-user.jpg';
import bouquet from '../assets/imgs/Bouquet.png';
import background from '../assets/imgs/wood1.jpeg';

/* Bridal Party Images */
import Redding from '../assets/imgs/bridalParty/Redding.jpg';
import Sanchez from '../assets/imgs/bridalParty/Sanchez.jpg';
import Inis from '../assets/imgs/bridalParty/Inis.jpg';
import Rivera from '../assets/imgs/bridalParty/Rivera.jpg';
import Aquiles from '../assets/imgs/bridalParty/Aquiles.jpg';
import Abreu from '../assets/imgs/bridalParty/Abreu.jpg';

import Mejia from '../assets/imgs/bridalParty/Mejia.jpg';
import Colon from '../assets/imgs/bridalParty/Colon.jpg';
import Horton from '../assets/imgs/bridalParty/Horton.jpg';
import Manzanillo from '../assets/imgs/bridalParty/Manzanillo.jpg';
import Mitchell from '../assets/imgs/bridalParty/Mitchell.jpg';
import Baba from '../assets/imgs/bridalParty/BABA.JPG';

var timeoutInt = null;

class WeddingParty extends Component{
    constructor(props) {
        super(props);

        this.state = {
            autoTime: 9,
            defaultTime: 9,
            selectedtype:"bridesmaid",
            groomsmenSel:-1,
            bridesmaidSel:0,
            groomsmen:[
                {"name":"Kris Redding", "title":"Best Man","img":Redding, "description":"Kris is a Software Engineer  that truly enjoys traveling and spending time with his family and friends.  If you look up Best Man in the dictionary, you'll find a picture of Kris. One of Jason’s  Best friends from their college days. Kris has always been someone you could count  on. One of the things Jason appreciates  most about Kris is how much he values his friends. Kris is the type of person who is always supportive and is there for you when you need him. Jason and Kris  have weekly talks where they catch up on everything  that's going on in their life which is something Jason truly cherish.  Jason is blessed to have him as part of the family."},
                {"name":"Jesus Sanchez", "title":"Groomsman","img":Sanchez, "description":"Jesus recently graduated College and Majored in Movement of Sports. He  has future plans on opening his  own gym to work with young athletes.  As  Jason’s younger brother he has  been  a huge influence on Jasons  life. When he was born, Jason’s whole life changed.  He went from  that hyper only child to having to set an example for another little human. Having Jesus in his life has been a huge influence on the man he is today. Jason  had to learn responsibility, accountability and how to be an adult at an early age. As his older brother he is very proud and honored on the man he turned out to be."},
                {"name":"Jonathan Abreu", "title":"Groomsman","img":Abreu, "description":"This man has literally been by Jasons side since he was born being more of a bother  than a cousin. They have always been there for one another pushing each other literally and figuratively through life’s ups and downs. They say you can’t choose your family, but you can choose your friends. In the case of   Jonathan, he would be in  Jason's life family ties or not."},
                {"name":"Jona Rivera", "title":"Groomsman","img":Rivera, "description":"Jona and Jason met right before College.  They would always hang out with a group of friends and over the years the group became smaller but Jona and Jason friendship grew closer. Jona has become like another brother to Jason."},
                {"name":"Giovanni Bonet Inis", "title":"Groomsman","img":Inis, "description":"Giovanni  is a current  Fire Fighter  for the City of Lawrence.  He was one of  the first friends  Jason had made when he  moved back home from College. They met working at Best Buy in the home theater department. When you meet Gio for the first time  you can tell right  away that he is just an all-around great person. Giovanni is one of those  friends that Jason always looks  to as a benchmark on how to live your life as he is a loving husband, amazing Farther, and a great person."},
                {"name":"Manuel Aquiles ", "title":"Groomsman","img":Aquiles, "description":"Mani - Mr. worldwide or Mani the spark. These are nicknames that Jason has come to call Mani over the years. Jason  has  never met someone with such energy and passion for living life. He is always on the move whether is traveling from place to place or bouncing from one event to another. Make sure to send Mani an invitation far in advance because his calendar is always full. But even with the hectic schedule Mani never seems to miss out on his Friends big life moments."}                
            ],
            bridesmaid:[
                {"name":"Nathalie Mejia", "title":"Maid of Honor","img":Mejia, "description":"Nathalie is a Medical Assistant. She enjoys helping others and has been in the Medical field for about 18 years.  Rocio has always admired and looked up to  her older sisters work ethic. Even though they are 8 years apart they  have become the closest  they have ever been. As Rocio’s older sister she takes the role of big sister seriously. She is already planning on spoiling her future nieces and nephews."},
                {"name":"Kristal Colon", "title":"Bridesmaid","img":Colon, "description":"Kristal just started College and is looking to become a Dental Hygienist.  She currently works in a dental office as a receptionist and biller. She enjoys learning and challenging herself. She considers herself  Jason and Rocio’s Favorite niece. Jason and Rocio are extremely proud of her  and one of her biggest fans."},
                {"name":"Nadia Horton", "title":"Bridesmaid","img":Horton, "description":"Nadia just got married to her best friend this past August of 2019. She is a social worker and is currently working with youth to further assist with their education and help with their career path.  Rocio and Nadia’s friendship started at  the Phillips Academy Summer Program  as they  both worked as teacher’s assistants. Ironically Nadia’s job at the camp was the same job Jason had worked the previous year, where Rocio had met him for the first time. Nadia and Rocio have been friends ever since."},
                {"name":"Jennifer Manzanillo", "title":"Bridesmaid","img":Manzanillo, "description":"Jennifer is a professional vocalist , educator and  entrepreneur. She is currently serving and finishing her 3rd year in the Peace Corps  in Madagascar  where she is promoting equality and community empowerment through education. Rocio and Jennifer met at a summer program at Berklee College of Music where they both were awarded with  a full scholarship to attend  Berklee. Even with the distance between them now their friendship continues to grow stronger throughout the years."},
                {"name":"Alexandria Pierre-Etienne (Ali Baba)", "title":"Bridesmaid","img":Baba, "description":"Ali is a jack of all traits. She can do anything you can’t do. Lol.  To name a few, she’s a professional photographer, musician, dancer, skateboarder, fitness model and the list goes on…  Rocio met Ali her sophomore year of college, when they met for a photo shoot. Ever since then a friendship evolved and they have stayed good friends."},
                {"name":"Courtney Mitchell", "title":"Bridesmaid","img":Mitchell, "description":"Courtney recently graduated college and majored in Social Justice. She is currently working as a C.O. and is pursuing her dreams to one day become a Federal Agent. Rocio and Courtney first met at a  Whittier football game  where Jesus  her boyfriend ( the grooms brother) played in. A championship was won and everyone was happy. :)  Courtney has now become part of the family."}               
            ]
        }

        this.getSelectedItem = this.getSelectedItem.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.toggleLoader = this.toggleLoader.bind(this);
        this.autoLoader = this.autoLoader.bind(this);
    }

    render(){  
        return(
            <div className="page-body weddingParty">
                <div className="party-nav mobile bridesmaid">
                    <div className="party-title">Bridesmaids</div>
                    {this.state.bridesmaid.map((item,i) =>(
                        <div className={"party-nav-item" + (this.state.selectedtype == "bridesmaid" && this.state.bridesmaidSel == i ? " selected" : "")} key={i} onClick={(e) => this.changeSelected(i,"bridesmaid")}>
                            <div className="img-container"><img src={item.img} /></div>
                        </div>
                    ))}
                </div>

                <div className="party-nav groomsmen">
                    <div className="party-title">Groomsmen</div>
                    {this.state.groomsmen.map((item,i) =>(
                        <div className={"party-nav-item" + (this.state.selectedtype == "groomsmen" && this.state.groomsmenSel == i ? " selected" : "")} key={i} onClick={(e) => this.changeSelected(i,"groomsmen")}>
                            <div className="img-container"><img src={item.img} /></div>
                        </div>
                    ))}
                </div>
                <div className="party-main">
                    <div className="highlight-img left"><img src={bouquet}></img></div>

                    <div className="party-main-container">
                        <h1>Wedding Party</h1>
                        <hr className="brace"/>

                        <div className={"selected-container " + this.state.selectedtype}>
                            <div className="selected-img split-item"><img src={this.getSelectedItem().img} /></div>
                            <div className="selected-content split-item">
                                <h2 className="cursive">{this.getSelectedItem().name}</h2>
                                <p className="sub-title">{this.getSelectedItem().title}</p>
                                <p className="description">{this.getSelectedItem().description}</p>
                            </div>
                        </div>

                        <div className="auto-timer">
                            <div className="auto-timer-container" onClick={this.toggleLoader}>
                                <span className="time">{this.state.autoTime}</span>
                                <div className="time-ctrl"><i className="fas fa-pause"></i></div>
                                <div className="loader-back" style={{ height: (((this.state.defaultTime - this.state.autoTime) / this.state.defaultTime)* 100)+'%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="party-nav desktop bridesmaid">
                    <div className="party-title">Bridesmaids</div>
                    {this.state.bridesmaid.map((item,i) =>(
                        <div className={"party-nav-item" + (this.state.selectedtype == "bridesmaid" && this.state.bridesmaidSel == i ? " selected" : "")} key={i} onClick={(e) => this.changeSelected(i,"bridesmaid")}>
                            <div className="img-container"><img src={item.img} /></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    getSelectedItem(){
        var self = this;
        var ret = {"name":"", "title":"", "img":defaultImg, "description":""};

        try {
            var selList = this.state[self.state.selectedtype];
            var selIndex = this.state[self.state.selectedtype+"Sel"];

            if(selList) {
                ret = selList[selIndex];
            }
        }
        catch(ex){
            console.log("error getting selected item info: ",ex);
        }

        return ret;
    }

    changeSelected(id, type){
        var self = this;
        var changeId = type+"Sel";
        
        this.setState ({ selectedtype: type, groomsmenSel:id, bridesmaidSel:id}, () => {
            if(timeoutInt) {
                clearInterval(timeoutInt);
                timeoutInt = null;
                self.setState({ autoTime: self.state.defaultTime });
            }
        });
    }

    toggleLoader(){
        var self = this;

        if(timeoutInt) {
            clearInterval(timeoutInt);
            timeoutInt = null;
            this.setState({ autoTime: self.state.defaultTime });
        }
        else {
            this.autoLoader();
        }
    }

    autoLoader(){
        var self = this;
        var changerKey = {"groomsmen":"bridesmaid", "bridesmaid":"groomsmen"};
        try {
            timeoutInt = setInterval(function(){
                if(self.state.autoTime > 1){
                    self.setState({ autoTime: self.state.autoTime - 1 });
                }
                else {
                    var newType = changerKey[self.state.selectedtype];
                    var changeId = newType+"Sel";
                    var newSel = self.state[changeId];
                    var newId = ((newSel+1) >= self.state[newType].length ? 0 : newSel +1); 
                    // change selected | set timer to default
                    self.setState ({ selectedtype: newType, [changeId]:newId, autoTime: self.state.defaultTime });                    
                }
            }.bind(this), 1000);
        }
        catch(ex){
            console.log("error with autoLoader: ",ex);
        }        
    }
    
    componentDidMount(){
        this.autoLoader();
    }
}
export default WeddingParty;
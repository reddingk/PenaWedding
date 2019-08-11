import React, { Component } from 'react';

/* Images */
import defaultImg from '../assets/imgs/no-user.jpg';
import bouquet from '../assets/imgs/Bouquet.png';
import background from '../assets/imgs/wood1.jpeg';

var timeoutInt = null;

class WeddingParty extends Component{
    constructor(props) {
        super(props);

        this.state = {
            autoTime: 7,
            defaultTime: 7,
            selectedtype:"groomsmen",
            groomsmenSel:0,
            bridesmaidSel:-1,
            groomsmen:[
                {"name":"Kris Redding", "title":"Best Man","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 1", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 2", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 3", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 4", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 5", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Groomsman 6", "title":"Groomsman","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            ],
            bridesmaid:[
                {"name":"Maid of Honor", "title":"Maid of Honor","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 1", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 2", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 3", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 4", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 5", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {"name":"Bridesmaid 6", "title":"Bridesmaid","img":defaultImg, "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
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
                                <h2>{this.getSelectedItem().name}</h2>
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
                <div className="party-nav bridesmaid">
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
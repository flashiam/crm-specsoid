import { IonContent, IonCard, IonText, IonSegment, IonCol, IonList, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCardTitle, IonIcon, IonCardSubtitle, IonCardHeader, IonSelect, IonSelectOption, IonCardContent, IonCheckbox, IonTextarea, IonRadioGroup, IonRadio, IonButton, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import StarRatingComponent from 'react-star-rating-component';
import './Analysis.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { compassSharp, hammerSharp, locate, locateSharp, personOutline, personSharp, phonePortraitSharp, planetSharp, arrowBackCircleOutline } from 'ionicons/icons';
import { platform, userInfo } from 'os';
import {useHistory} from 'react-router-dom';

const Channelise: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const lead:any = location.state
  const [req, setReq] = useState<any>(lead.profile)
  const [leader, setLead] = useState<any>(lead.leader)
  const [channel, setChannel] = useState<any>({viable:"medium", product:"light", service:"light"})
  const [data, setData] = useState<any>(
      {
          viable:{},
          product:{},
          service:{}
      }
  )
 
  

  useEffect(()=>{
      console.log(leader.lead)
      console.log(navigator.userAgent.search("Android"))
  })
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            
          <IonRow>
              
              {/* <IonCol size="2.4">
                  
              </IonCol> */}
          <IonCol size="4.8">
              <IonCard style={{height:"140px"}}>
              <IonCardHeader color="light">
                  <IonCardSubtitle>
                     <b> Meeting Minutes </b>
                  </IonCardSubtitle>
              </IonCardHeader>
              <IonTextarea placeholder="Minutes of the meeting"></IonTextarea>
              </IonCard>
              
          </IonCol>
          <IonCol size="3">
              <IonCard style={{height:"140px"}}>
                  <IonCardHeader color="light">
                      <IonCardSubtitle>
                          <b>Meeting Parameters</b>
                      </IonCardSubtitle>
                  </IonCardHeader>
              </IonCard>
          </IonCol>
          <IonCol size="4">
              <IonCard style={{height:"140px"}}>
              <IonCardHeader color="light">
                  <IonCardSubtitle>
                      <b>Basic Details</b>
                  </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              
              <IonRow>
              <IonCol>
                  
                  <IonCardSubtitle>
                  <IonIcon icon={personSharp} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.name}
                  </IonCardSubtitle>
                  
              </IonCol>
              <IonCol>
                  <IonCardSubtitle>
                  <IonIcon icon={compassSharp} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.busines}
                  </IonCardSubtitle>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
              <IonCardSubtitle>
                  <IonIcon icon={planetSharp} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.type}
              </IonCardSubtitle>
              </IonCol>
              <IonCol>
              <IonCardSubtitle>
                  <IonIcon icon={hammerSharp} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.for}
              </IonCardSubtitle>
              </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
              <IonCardSubtitle>
                  <IonIcon icon={locate} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.city}
              </IonCardSubtitle>
              </IonCol>
          <IonCol>
              <IonCardSubtitle>
                  <IonIcon icon={phonePortraitSharp} style={{marginRight:"30px"}}>
  
                  </IonIcon>
                  {leader.lead.contact}
              </IonCardSubtitle>
              </IonCol>
          </IonRow>
              
              </IonCardContent>
  
          </IonCard>
              </IonCol>
          {/* <IonCol size="1">
  
          </IonCol> */}
          </IonRow>
          
          {/* <IonSegment> */}
          {/* <IonCard> */}
          
          {/* </IonCard> */}
                
            {/* </IonSegment> */}
            <IonCard style={{boxShadow:"0px 0px 0px", marginBottom:"-5px", marginLeft:"-5px", marginRight:"-5px", marginTop:"-5px"}} color="light">
                <IonRow>
                    <IonCol>
                        <IonCardSubtitle style={{textAlign:"center", borderBottom:"5px solid #f4f5f8", marginRight:"-10px", paddingBottom:"10px"}}>
                            <b>Build Profile</b>
                        </IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonCardSubtitle style={{textAlign:"center", borderBottom:"5px solid #3880ff", marginRight:"-10px", paddingBottom:"10px"}}>
                            Channelise Lead
                        </IonCardSubtitle>
                    </IonCol>
                    <IonCol>
                        <IonCardSubtitle style={{textAlign:"center", borderBottom:"5px solid #f4f5f8", paddingBottom:"10px"}}>
                            Share URL
                        </IonCardSubtitle>
                    </IonCol>
                </IonRow>
            </IonCard>
            {/* <IonRow>
                  <IonCol>
                       <IonCard style={{borderBottom:"3px solid #3880ff", paddingLeft:"30%"}}>
                        Build Profile
                        </IonCard> 
                  </IonCol>
                  <IonCol>
                      <IonCard style={{borderBottom:"3px solid #92949c", paddingLeft:"30%"}}>
                      Channelize Lead
                      </IonCard>
                  </IonCol>
                  <IonCol>
                      <IonCard style={{borderBottom:"3px solid #92949c", paddingLeft:"30%"}}>
                      Share URL
                      </IonCard>
                  </IonCol>
          </IonRow> */}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonRow>
        <IonCol>
                  <IonCard >
                      <IonCardHeader color="light">
                          <IonRow>
                          <IonCol size="2">
                                <IonIcon icon={arrowBackCircleOutline} size="large" 
                                onClick={()=>{history.goBack()}} onPointerEnter={(e)=>{e.currentTarget.color="dark"}} onPointerLeave={(e)=>{e.currentTarget.color="medium"}} color="medium">
                                    
                                </IonIcon>
                            </IonCol>
                              <IonCol size="7">
                                  <IonCardSubtitle style={{marginTop:"10px"}}>
                                  <b>Channelise Into? </b>
                                  </IonCardSubtitle>
                              </IonCol>
                              <IonCol size="2">
                                  <IonButton size="small" onClick={()=>{history.push({pathname:"/analysis/share", state:{profile:req, leader:leader, channel:data}})}}>
                                      Next
                                  </IonButton>
                              </IonCol>
                          </IonRow>
                          
                      
                      </IonCardHeader>
                      <IonCardContent style={{height:"300px", overflowY:"scroll"}}>
                          <IonList lines="none" style={{fontSize:"0.9rem"}}>
                          <IonItem color={`${channel.viable}`} onClick={()=>{setChannel((chan:any)=>({...chan, viable:"medium", product:"light", service:"light"}))}}>
                              Viable Product
                          </IonItem>
                          <IonItem color={`${channel.product}`} onClick={()=>{setChannel((chan:any)=>({...chan, viable:"light", product:"medium", service:"light"}))}}>
                               Custom Product
                          </IonItem>
                          <IonItem color={`${channel.service}`} onClick={()=>{setChannel((chan:any)=>({...chan, viable:"light", product:"light", service:"medium"}))}}>
                              Custom Service
                          </IonItem>
{/*                           
                          <IonItem style={{marginLeft:"10px"}}>
                              {"> "}Aspirations
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Business Requirements
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - App Requirements
                          </IonItem>
                          <IonItem style={{marginLeft:"10px"}}>
                              {"> "}Foundation
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Budget
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Vision
                          </IonItem>
                          <IonItem color="medium">
                              Business Details
                          </IonItem>
                          <IonItem style={{marginLeft:"10px"}}>
                              {"> "}Business Portfolio
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Business Entity
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Business Domain
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Service Domain
                          </IonItem>
                          <IonItem style={{marginLeft:"10px"}}>
                              {"> "}Business Infrastructure
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Service Platform 
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Operating System
                          </IonItem>
                          <IonItem style={{marginLeft:"20px"}}>
                              - Marketing Sources
                          </IonItem> */}
                          </IonList>
                          
                          
                      </IonCardContent>
                      
                  </IonCard>
                  </IonCol>
                  <IonCol size="9">
                    {channel.viable == "medium" ?
                    <IonCard style={{height:"350px", overflowY:"scroll"}}>
              
  
                  
                    <IonCardHeader>
                        <IonCardTitle>
                        Viable Product Need Analysis
                        </IonCardTitle>
                   
                    </IonCardHeader>
                    <IonCardContent>
                        
                    </IonCardContent>
                    
                    {/* </IonCol> */}
                    
                    
                    
                </IonCard>: 
                channel.product == "medium" ?
                    <IonCard style={{height:"350px", overflowY:"scroll"}}>
              
  
                  
                    <IonCardHeader>
                        <IonCardTitle>
                        Custom Product Need Analysis
                        </IonCardTitle>
                   
                    </IonCardHeader>
                    <IonCardContent>
                        
                    </IonCardContent>
                    
                    {/* </IonCol> */}
                    
                    
                    
                </IonCard> :
                channel.service =="medium" ?
                <IonCard style={{height:"350px", overflowY:"scroll"}}>
              
  
                  
                <IonCardHeader>
                    <IonCardTitle>
                    Custom Service Analysis 
                    </IonCardTitle>
               
                </IonCardHeader>
                <IonCardContent>
                    
                </IonCardContent>
                
                {/* </IonCol> */}
                
                
                
            </IonCard>:
            null
                }
          
          </IonCol>
          
          </IonRow>
          
        </IonContent>
        {/* <IonFooter style={{height:"40px"}}>
              <IonToolbar>
                  <IonButton color="warning" size="small" >
                      Next
                  </IonButton>
              </IonToolbar>
          </IonFooter> */}
        
      </IonPage>
  );
};

export default Channelise;
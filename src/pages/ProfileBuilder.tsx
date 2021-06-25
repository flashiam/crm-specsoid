import { IonContent, IonCard, IonText, IonSegment, IonCol, IonList, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCardTitle, IonIcon, IonCardSubtitle, IonCardHeader, IonSelect, IonSelectOption, IonCardContent, IonCheckbox, IonTextarea, IonRadioGroup, IonRadio, IonButton, IonImg, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import StarRatingComponent from 'react-star-rating-component';
import './Analysis.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { arrowBackCircle, compassSharp, hammerSharp, locate, locateSharp, personOutline, personSharp, phonePortraitSharp, planetSharp, arrowBackCircleOutline } from 'ionicons/icons';
import { platform, userInfo } from 'os';
import {useHistory} from 'react-router-dom';

const Analysis: React.FC = () => {
  const location = useLocation()
  const history = useHistory()
  const leader:any = location.state
  console.log(leader)
//   if(leader.req){
//       const request = leader.req
//       const [req, setReq] = useState<any>(request)
//   }else{
    const [req, setReq] = useState<any>(
        ()=>{
            if(!leader.req){
                const obj = {
                    aspiration:{
                        businessReq:{
                            data:[], 
                            desc:""
                          }, 
                          applicationReq:{
                              data:[], 
                              desc:""
                          }
                      }, 
                      
                      foundation:{
                          budget:"", 
                          vision:{
                              data:"", 
                              desc:""
                          }
                      }, 
          
                      businessPort:{
                          businessEnt:"", 
                          businessScale:"", 
                          businessDomain:{
                              data:[], 
                              desc:""
                          }, 
                          serviceDomain:{
                              data:[], 
                              desc:""
                          }
                      }, 
                      
                      businessInfra:{
                          servicePlat:{
                              data:[], 
                              desc:""
                          }, 
                          operatingSys:{
                              data:[], 
                              desc:""
                          }, 
                          marketingSource:{
                              data:[], 
                              desc:""
                          }
                      }
                  }
                return obj
            }
            else{
                const obj = leader.req
                return obj
            }
            
        }
        
          )
  
//   }
  

  useEffect(()=>{
      console.log(leader.lead)
      console.log(navigator.userAgent.search("Android"))
    //   console.log(req)
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
                      <IonCardSubtitle style={{textAlign:"center", borderBottom:"5px solid #3880ff", marginRight:"-10px", paddingBottom:"10px"}}>
                          <b>Build Profile</b>
                      </IonCardSubtitle>
                  </IonCol>
                  <IonCol>
                      <IonCardSubtitle style={{textAlign:"center", borderBottom:"5px solid #f4f5f8", marginRight:"-10px", paddingBottom:"10px"}}>
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
                <IonCol size="9">
        <IonCard style={{height:"350px", overflowY:"scroll"}}>
            

                
            <IonCardHeader>
                <IonCardTitle>
                Requirement Details
                </IonCardTitle>
           
            </IonCardHeader>
            
            <IonCardContent>
            <IonText><b>Aspirations</b></IonText>
                <IonCardSubtitle color="primary">Select Business Requirements</IonCardSubtitle>
                <IonRow>
                    <IonCol size="8">
                    <IonList>
                    <IonItem>
                        <IonLabel>
                            Marketing
                        </IonLabel>
                        <IonCheckbox value="Marketing" onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Sales
                        </IonLabel>
                        <IonCheckbox value="Sales" onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Operations
                        </IonLabel>
                        <IonCheckbox value="Operations" onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Membership
                        </IonLabel>
                        <IonCheckbox value="Membership" onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    </IonList>
                    </IonCol>
                    
                    <IonCol size="4">
                        <IonTextarea onIonChange={(e)=>{var res=req; res.aspiration.businessReq.desc = e.detail.value; setReq(res)}} placeholder="Add Description about exact business requirement here..."></IonTextarea>
                    </IonCol>
                   
                </IonRow>
                
            </IonCardContent>
            <IonCardContent>
                <IonCardSubtitle color="primary">Select Application Requirements</IonCardSubtitle>
                <IonRow>
                    <IonCol size="8">
                    <IonList>
                    <IonItem>
                        <IonLabel>
                            Web Application
                        </IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.applicationReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.applicationReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.applicationReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Android Application
                        </IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.applicationReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.applicationReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.applicationReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            iOS Application
                        </IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.applicationReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.applicationReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.applicationReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Website
                        </IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.applicationReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.applicationReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.applicationReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Desktop Application
                        </IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.applicationReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.applicationReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    </IonList>
                    </IonCol>
                    <IonCol>
                        <IonTextarea onIonChange={(e)=>{var res=req; res.aspiration.applicationReq.desc = e.detail.value; setReq(res)}} placeholder="Add Description about exact application requirement here..."></IonTextarea>
                    </IonCol>
                </IonRow>
                
            </IonCardContent>
            <IonCardContent>
            <IonText><b>Foundation</b></IonText>
                <IonCardSubtitle color="primary">What is the budget you have in your mind for this aspiration?</IonCardSubtitle>
                <IonRadioGroup onIonChange={(e)=>{var res = req; res.foundation.budget = e.detail.value; setReq(res); console.log(res)}}> 
                <IonList>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>
                                    10-20K
                                </IonLabel>
                                <IonRadio value="10-20K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    20-30K
                                </IonLabel>
                                <IonRadio value="20-30K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    30-40K
                                </IonLabel>
                                <IonRadio value="30-40K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    40-50K
                                </IonLabel>
                                <IonRadio value="40-50K"></IonRadio>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                        <IonItem>
                                <IonLabel>
                                    50-75K
                                </IonLabel>
                                <IonRadio value="50-75K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    75-100K
                                </IonLabel>
                                <IonRadio value="75-100K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    100-150K
                                </IonLabel>
                                <IonRadio value="100-150K"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    150-200K
                                </IonLabel>
                                <IonRadio value="150-200K"></IonRadio>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonList>
                </IonRadioGroup>
            </IonCardContent>
            <IonCardContent>
                <IonCardSubtitle color="primary">What are you forseeing for your business in a long run?</IonCardSubtitle>
                <IonRow>
                <IonCol size="8">
                <IonRadioGroup onIonChange={(e)=>{var res = req; res.foundation.vision = e.detail.value; setReq(res); console.log(res)}}> 
                <IonList>
                    {/* <IonRow>
                        <IonCol> */}
                            <IonItem>
                                <IonLabel>
                                    Self Employment
                                </IonLabel>
                                <IonRadio value="Self Employment"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Enterprise
                                </IonLabel>
                                <IonRadio value="Enterprise"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Multi-City Scalibility
                                </IonLabel>
                                <IonRadio value="Multi_City Scalability"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Domain Expansion
                                </IonLabel>
                                <IonRadio value="Domain Expansion"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Franchise Modelling
                                </IonLabel>
                                <IonRadio value="Franchise Modelling"></IonRadio>
                            </IonItem>
                        {/* </IonCol> */}
                </IonList>
                </IonRadioGroup>
                </IonCol>
                <IonCol>
                <IonTextarea onIonChange={(e)=>{var res = req; res.foundation.vision.desc = e.detail.value}} placeholder="Add Description about forseeing for your business in long run here..."></IonTextarea>
                </IonCol>
                </IonRow>
                
            </IonCardContent>
            <IonCardHeader>
                
            <IonCardTitle>Business Details</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonText><b>Business Portfolio</b></IonText>
                <IonList>
                    <IonRow>
                    
                        <IonCol>
                        <IonCardSubtitle color="primary">Business Entity - Is your business registered with government ?</IonCardSubtitle>
                        <IonRadioGroup onIonChange={(e)=>{var res = req; res.businessPort.businessEnt = e.detail.value; setReq(res)}}>
                        <IonItem>
                        <IonLabel>Unregistered</IonLabel>
                        <IonRadio value="Unregistered"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>Proprietership</IonLabel>
                        <IonRadio value="Proprietership"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>Partnership Firm</IonLabel>
                        <IonRadio value="Partnership Firm"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>LLP</IonLabel>
                        <IonRadio value="LLP"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>Private Limited</IonLabel>
                        <IonRadio value="Private Limited"></IonRadio>
                        </IonItem>    
                        </IonRadioGroup>
                        </IonCol>

                        
                        <IonCol>
                        <IonCardSubtitle color="primary">Business Scale - Total Number of Employee in your organisation</IonCardSubtitle>
                        <IonRadioGroup onIonChange={(e)=>{var res = req; res.businessPort.businessScale=e.detail.value; setReq(res)}} >
                        <IonItem>
                        <IonLabel>1-9</IonLabel>
                        <IonRadio value="1-9"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>10-24</IonLabel>
                        <IonRadio value="10-24"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>24-50</IonLabel>
                        <IonRadio value="24-50"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>50-100</IonLabel>
                        <IonRadio value="50-100"></IonRadio>
                        </IonItem>
                        <IonItem>
                        <IonLabel>Above 100</IonLabel>
                        <IonRadio value="Above 100"></IonRadio>
                        </IonItem>
                          
                        </IonRadioGroup>
                        </IonCol>
                    </IonRow>
                </IonList>
            </IonCardContent>
            <IonCardContent>
                <IonCardSubtitle color="primary">Business Domain - On what business model your idea is based on ?</IonCardSubtitle>
                <IonRow>
                    <IonCol size="8">
                    <IonList>
                    <IonItem>
                        <IonLabel>Manufacturing Firm</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.businessPort.businessDomain.data.indexOf(e.detail.value); if(index>-1){res.businessPort.businessDomain.data.splice(index, 1);  setReq(res); console.log(res)}else{res.businessPort.businessDomain.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Merchandise Store</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.businessPort.businessDomain.data.indexOf(e.detail.value); if(index>-1){res.businessPort.businessDomain.data.splice(index, 1);  setReq(res); console.log(res)}else{res.businessPort.businessDomain.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Aggregator Platform</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.businessPort.businessDomain.data.indexOf(e.detail.value); if(index>-1){res.businessPort.businessDomain.data.splice(index, 1);  setReq(res); console.log(res)}else{res.businessPort.businessDomain.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Professional Service</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.businessPort.businessDomain.data.indexOf(e.detail.value); if(index>-1){res.businessPort.businessDomain.data.splice(index, 1);  setReq(res); console.log(res)}else{res.businessPort.businessDomain.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Others</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.businessPort.businessDomain.data.indexOf(e.detail.value); if(index>-1){res.businessPort.businessDomain.data.splice(index, 1);  setReq(res); console.log(res)}else{res.businessPort.businessDomain.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    </IonList>
                    </IonCol>
                    <IonCol>
                        <IonTextarea onIonChange={(e)=>{var res = req; res.businessPort.businessDomain.desc = e.detail.value; setReq(res)}} placeholder="Describe the business domain here..."></IonTextarea>
                    </IonCol>
                </IonRow>
                
            </IonCardContent>

            <IonCardContent>
                <IonCardSubtitle color="primary">Service Domain</IonCardSubtitle>
                <IonRow>
                    <IonCol size="8">
                    <IonList>
                    <IonItem>
                        <IonLabel>Hospitality</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Education</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Agriculture</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Healthcare</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Banking and Finance</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Real Estate</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Legal Services</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Media and Marketing</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Others</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{var res = req; var index = res.aspiration.businessReq.data.indexOf(e.detail.value); if(index>-1){res.aspiration.businessReq.data.splice(index, 1);  setReq(res); console.log(res)}else{res.aspiration.businessReq.data.push(e.detail.value); setReq(res); console.log(res)}}}></IonCheckbox>
                    </IonItem>
                    </IonList>
                    </IonCol>
                    <IonCol>
                        <IonTextarea placeholder="Describe the business domain here..."></IonTextarea>
                    </IonCol>
                </IonRow>
                
            </IonCardContent>

            <IonCardContent>
            <IonText><b>Business Infrastructure</b></IonText>
            <IonCardSubtitle color="primary">Service Platform - How are you currently delivering your product and services ?</IonCardSubtitle>

            <IonRow>
                <IonCol>
                    <IonList>
                        <IonItem>
                            <IonLabel>Social Media</IonLabel>
                            {/* <IonCheckbox></IonCheckbox>
                            <IonSelect>
                                <IonSelectOption></IonSelectOption>
                            </IonSelect> */}
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Website</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel>WebApp</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Native App</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel>E-Commerce Platform</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Offline Mode</IonLabel>
                            <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonItem>
                    </IonList>
                </IonCol>
                {/* <IonCol>
                    <IonRow>
                        <IonList>
                            <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>
                            <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>
                            <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>
                            <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>
                            <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>
                            <IonItem>
                                <IonLabel>6</IonLabel>
                                <IonText>Offline Mode</IonText>
                            </IonItem>

                        </IonList>
                    </IonRow>
                </IonCol> */}
                <IonCol>
                    <IonTextarea placeholder="Add description about service platform here ..."></IonTextarea>
                </IonCol>
            </IonRow>
            
            </IonCardContent>
            <IonCardContent>
                <IonCardSubtitle>Operating System - How intensive is your business operations ?</IonCardSubtitle>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem>
                            <IonLabel>Inventory Management</IonLabel>
                            {/* <StarRatingComponent
                            name="star1"
                            value={3}
                            starCount={5}
                            starColor="primary"
                            emptyStarColor="medium"
                            /> */}
                                
                            
                        <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Resource Management</IonLabel>
                            {/* <StarRatingComponent
                            name="star1"
                            value={3}
                            starCount={5}
                            starColor="primary"
                            emptyStarColor="medium"
                            /> */}
                                
                            
                        <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Supply Chain Management</IonLabel>
                            {/* <StarRatingComponent
                            name="star1"
                            value={3}
                            starCount={5}
                            starColor="primary"
                            emptyStarColor="medium"
                            /> */}
                                
                            
                        <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Customer Service</IonLabel>
                            {/* <StarRatingComponent
                            name="star1"
                            value={3}
                            starCount={5}
                            starColor="primary"
                            emptyStarColor="medium"
                            /> */}
                                
                            
                        <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Financial Management</IonLabel>
                            {/* <StarRatingComponent
                            name="star1"
                            value={3}
                            starCount={5}
                            starColor="primary"
                            emptyStarColor="medium"
                            /> */}
                                
                            
                        <IonRow>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        1
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        2
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        3
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        4
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        5
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton shape="round" color="medium" onClick={(e:any)=>{e.currentTarget.color="primary"}}>
                                        6
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            </IonItem>
                        </IonList>
                    </IonCol>
                    <IonCol>
                        <IonTextarea placeholder="Add description about Operating System here ..."></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonCardContent>
            <IonCardContent>
            <IonCardSubtitle color="primary">Marketing Sources - Have you ever tried digital marketing, or registered your business with an aggregator platform ?</IonCardSubtitle>
                <IonRow>
                    <IonCol>
                        <IonList>
                            <IonItem>
                                <IonLabel>Justdial</IonLabel>
                                <IonCheckbox></IonCheckbox>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Sulekha</IonLabel>
                                <IonCheckbox></IonCheckbox>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Social Media</IonLabel>
                                <IonCheckbox></IonCheckbox>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Google my Business</IonLabel>
                                <IonCheckbox></IonCheckbox>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Website</IonLabel>
                                <IonCheckbox></IonCheckbox>
                            </IonItem>
                        </IonList>
                    </IonCol>
                    <IonCol>
                        <IonTextarea placeholder="Add description about marketing sources here..."></IonTextarea>
                    </IonCol>
                </IonRow>
            </IonCardContent>
            {/* </IonCol> */}
            
            
            
        </IonCard>
        </IonCol>
        <IonCol>
                <IonCard >
                    <IonCardHeader color="light">
                        <IonRow>
                            <IonCol size="2">
                                <IonIcon icon={arrowBackCircleOutline} size="large" onClick={()=>history.push({pathname:"/tab1"})} onPointerEnter={(e)=>{e.currentTarget.color="dark"}} onPointerLeave={(e)=>{e.currentTarget.color="medium"}} color="medium">
                                    
                                </IonIcon>
                            </IonCol>
                            <IonCol size="7">
                                <IonCardSubtitle style={{marginTop:"10px"}} >
                                <b>Analysis Milestone </b>
                                </IonCardSubtitle>
                            </IonCol>
                            <IonCol size="2">
                                <IonButton size="small" onClick={()=>{history.push({pathname:"/analysis/channelise", state:{leader:leader, profile:req}})}}>
                                    Next
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        
                    
                    </IonCardHeader>
                    <IonCardContent style={{height:"300px", overflowY:"scroll"}}>
                        <IonList lines="none" style={{fontSize:"0.9rem"}}>
                        <IonItem color="medium">
                            Requirement Details
                        </IonItem>
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
                        </IonItem>
                        </IonList>
                        
                            {/* <IonList>
                                <IonItem>
                                    Requirement Details
                                <IonList>
                                    <IonItem>
                                        
                                            Aspirations
                                        
                                    </IonItem>
                                    <IonItem>
                                        
                                            Foundation
                                    
                                    </IonItem>
                                </IonList>
                                </IonItem>
                            </IonList> */}
                    </IonCardContent>
                    
                </IonCard>
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

export default Analysis;

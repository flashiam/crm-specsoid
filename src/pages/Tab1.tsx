import { IonContent, IonHeader, IonCardHeader,IonCard, IonText, IonList, IonPage, IonRow, IonTitle, IonCol, IonToolbar, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonSegment, IonIcon, IonSearchbar, IonCheckbox } from '@ionic/react';
import { arrowDown, callOutline, callSharp, cubeOutline, cubeSharp, key, refreshCircleOutline, refreshCircleSharp, searchCircleOutline, searchCircleSharp } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState, useEffect } from 'react';
import { checkServerIdentity } from 'tls';
import { useHistory } from 'react-router-dom';

const Tab1: React.FC = () => {
  const [clicked, setClicked] = useState<any>(0)
  const history = useHistory();
  const [leader, setLeader] = useState<any>({})
  const leads = [
    {
      id:"1",
      name:"Mradul Parihar",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"2",
      name:"Srishti Sawle",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"3",
      name:"Animesh Srivastav",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"4",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"5",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"6",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"7",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"8",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"9",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"10",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    },
    {
      id:"11",
      name:"Shivanshu Dubey",
      busines:"Specsoid System",
      city:"Bhopal",
      email:"mradul@specsoid.in",
      contact:8620810846,
      type:"Retail",
      for:"Product"
    }
  ]


  const getClicked = () => {
    
  }
 
  useEffect(()=>{
    console.log(clicked)
    
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Leads
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  Create Lead
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    {/* <IonLabel>
                      POC Name
                    </IonLabel> */}
                    <IonInput type="text" placeholder="POC Name"> 
                      
                    </IonInput>
                  </IonItem>
                  <IonItem>
                    {/* <IonLabel>
                      Business Name
                    </IonLabel> */}
                    <IonInput type="text" placeholder="Business Name"> 
                      
                    </IonInput>
                  </IonItem>
                  <IonItem>
                    {/* <IonLabel>
                      City 
                    </IonLabel> */}
                    <IonInput type="text" placeholder="City"> 
                      
                    </IonInput>
                  </IonItem>
                  <IonItem>
                    {/* <IonLabel>
                      Business Type
                    </IonLabel> */}
                    <IonSelect interface="action-sheet" placeholder="Business Type" color="dark">
                      <IonSelectOption>
                        E-Commerce
                      </IonSelectOption>
                      <IonSelectOption>
                        Retail
                      </IonSelectOption>
                      <IonSelectOption>
                        E-Marketplace
                      </IonSelectOption>
                      <IonSelectOption>
                        Hospitality
                      </IonSelectOption>
                      <IonSelectOption>
                        Media and Marketing
                      </IonSelectOption>
                      <IonSelectOption>
                        Educational 
                      </IonSelectOption>
                      <IonSelectOption>
                        Manufactuing
                      </IonSelectOption>
                      <IonSelectOption>
                        Supply Chain
                      </IonSelectOption>
                      <IonSelectOption>
                        Services
                      </IonSelectOption>
                      <IonSelectOption>
                        Other
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem>
                    {/* <IonLabel>Contact</IonLabel> */}
                    <IonInput type="tel" placeholder="Contact"> 
                      
                    </IonInput>                    
                  </IonItem>
                  <IonItem>
                    {/* <IonLabel>
                      Email 
                    </IonLabel> */}
                    <IonInput type="text" placeholder="Email" color="dark">

                    </IonInput>
                  </IonItem>
                  <IonItem>
                    <IonSelect placeholder="Lead for">
                      <IonSelectOption>
                        Product
                      </IonSelectOption>
                      <IonSelectOption>
                        Service
                      </IonSelectOption>
                      <IonSelectOption>
                        Support
                      </IonSelectOption>
                      <IonSelectOption>
                        Other
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem lines="none">
                  <IonSegment>
                  <IonButton color="primary" size="small">
                    Save
                  </IonButton>
                  <IonButton color="secondary" size="small">
                    Reset
                  </IonButton>
                  </IonSegment>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard >
              <IonList>
                <IonToolbar>
                  <IonRow>
                    <IonCol size="0.3"></IonCol>
                    <IonCol size="9">
                        
                        <IonIcon icon={refreshCircleSharp} size="large" onPointerEnter={(e:any)=>{e.currentTarget.color="primary"}} onPointerLeave={(e:any)=>{e.currentTarget.color="dark"}}></IonIcon>
                      
                    </IonCol>
                    {/* <IonCol size="4">
                      <IonIcon icon={searchCircleSharp} size="large"></IonIcon>
                    </IonCol> */}
                    <IonCol size="1">
                      {clicked!=0 ?
                      <IonIcon icon={cubeSharp} size="large" onPointerEnter={(e:any)=>{e.currentTarget.color="primary"}} onPointerLeave={(e:any)=>{e.currentTarget.color="dark"}} onClick={()=>{history.push({pathname:"analysis/requirement", state:{lead:leader}})}}></IonIcon>:
                      <IonIcon icon={cubeSharp} size="large" color="medium"></IonIcon>
                    }
                      
                    </IonCol>
                    <IonCol size="1">
                      {clicked!=0 ?
                      <IonIcon icon={callSharp} size="large" onPointerEnter={(e:any)=>{e.currentTarget.color="primary"}} onPointerLeave={(e:any)=>{e.currentTarget.color="dark"}}></IonIcon>:
                      <IonIcon icon={callSharp} size="large" color="medium"></IonIcon>
                    }
                      
                    </IonCol>
                  </IonRow>
                </IonToolbar>
                <IonItem>
                  
                    <IonCol size="3">
                      <b>POC Name</b>
                    </IonCol>
                    <IonCol size="4">
                      <b>Business Name</b>
                    </IonCol>
                    <IonCol size="0.9">
                      <b>City</b>
            
                    </IonCol>
                    <IonCol size="2.3">
                      <IonSelect interface="popover">
                        <IonIcon icon={arrowDown}></IonIcon>
                        <IonSelectOption>
                        Bhopal
                      </IonSelectOption>
                      <IonSelectOption>
                        Pune
                      </IonSelectOption>
                      <IonSelectOption>
                        Indore
                      </IonSelectOption>
                      </IonSelect>
                      
                    </IonCol>
                    <IonCol size="2">
                      <b>Email</b>
                    </IonCol>
                  
                </IonItem>
                <IonItem lines="none">
                  <IonSearchbar></IonSearchbar>
                </IonItem>
                <IonCard style={{height:"275px", overflowY:"scroll", boxShadow:"0px 0px 0px"}}>
                {leads.map((lead:any)=>(
                  <IonItem onPointerEnter={(e:any)=>{e.currentTarget.color="light"}} onPointerLeave={(e:any)=>{e.currentTarget.color=undefined}} onClick={(e:any)=>{setClicked(lead.id); setLeader(lead)}} id={lead.id}>
                  <IonCol size="3">
                        {lead.name}
                      </IonCol>
                      <IonCol size="4">
                        {lead.busines}
                      </IonCol>
                      <IonCol size="2.5">
                        {lead.city}
              
                      </IonCol>
                      <IonCol size="2" style={{fontSize:"0.7rem"}}>
                        <IonText>
                        {lead.email}
                        </IonText>
                      </IonCol>
                  </IonItem>
                ))}
                </IonCard>
                
              </IonList>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

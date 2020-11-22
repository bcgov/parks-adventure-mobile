import React from 'react'

import AtvNa from './activity/atv-na.svg'
import Atv from './activity/atv.svg'
import CanoeingNa from './activity/canoeing-na.svg'
import Canoeing from './activity/canoeing.svg'
import CavingNa from './activity/caving-na.svg'
import Caving from './activity/caving.svg'
import ClimbingNa from './activity/climbing-na.svg'
import Climbing from './activity/climbing.svg'
import CyclingNa from './activity/cycling-na.svg'
import Cycling from './activity/cycling.svg'
import EBikesNa from './activity/e-bikes-permitted-na.svg'
import EBikes from './activity/e-bikes-permitted.svg'
import FishingNa from './activity/fishing-na.svg'
import Fishing from './activity/fishing.svg'
import HikingNa from './activity/hiking-na.svg'
import Hiking from './activity/hiking.svg'
import HorsebackRidingNa from './activity/horseback-riding-na.svg'
import HorsebackRiding from './activity/horseback-riding.svg'
import HuntingNa from './activity/hunting-na.svg'
import Hunting from './activity/hunting.svg'
import InterpretiveProgramsNa from './activity/interpretive-programs-outside-na.svg'
import InterpretivePrograms from './activity/interpretive-programs-outside.svg'
import MarineAccessibleCampingNa from './activity/marine-accessible-camping-na.svg'
import MarineAccessibleCamping from './activity/marine-accessible-camping.svg'
import MountainBikingNa from './activity/mountain-biking-na.svg'
import MountainBiking from './activity/mountain-biking.svg'
import PetsOnLeashNa from './activity/pets-on-leash-na.svg'
import PetsOnLeash from './activity/pets-on-leash.svg'
import SailingNa from './activity/sailing-na.svg'
import Sailing from './activity/sailing.svg'
import ScubaDivingNa from './activity/scuba-diving-na.svg'
import ScubaDiving from './activity/scuba-diving.svg'
import SnowmobilingNa from './activity/snowmobiling-na.svg'
import Snowmobiling from './activity/snowmobiling.svg'
import SwimmingNa from './activity/swimming-na.svg'
import Swimming from './activity/swimming.svg'
import ViewpointNa from './activity/viewpoint-na.svg'
import Viewpoint from './activity/viewpoint.svg'
import WaterskiingNa from './activity/waterskiing-na.svg'
import Waterskiing from './activity/waterskiing.svg'
import WildernessCampingNa from './activity/wilderness-camping-na.svg'
import WildernessCamping from './activity/wilderness-camping.svg'
import WildlifeViewingNa from './activity/wildlife-viewing-na.svg'
import WildlifeViewing from './activity/wildlife-viewing.svg'
import WindSurfingNa from './activity/wind-surfing-na.svg'
import WindSurfing from './activity/wind-surfing.svg'
import WinterRecreationNa from './activity/winter-recreation-na.svg'
import WinterRecreation from './activity/winter-recreation.svg'

import AccessibilityNa from './facility/accessibility-na.svg'
import Accessibility from './facility/accessibility.svg'
import AmphitheatreNa from './facility/amphitheatre-na.svg'
import Amphitheatre from './facility/amphitheatre.svg'
import BikeParkNa from './facility/bike-park-na.svg'
import BikePark from './facility/bike-park.svg'
import BoatLaunchNa from './facility/boat-launch-na.svg'
import BoatLaunch from './facility/boat-launch.svg'
import CampfiresNa from './facility/campfires-na.svg'
import Campfires from './facility/campfires.svg'
import DrinkingWaterNa from './facility/drinking-water-na.svg'
import DrinkingWater from './facility/drinking-water.svg'
import ElectricalHookUpsNa from './facility/electrical-hook-ups-na.svg'
import ElectricalHookUps from './facility/electrical-hook-ups.svg'
import ElectricalOutletsNa from './facility/electrical-outlets-na.svg'
import ElectricalOutlets from './facility/electrical-outlets.svg'
import FoodCacheNa from './facility/food-cache-na.svg'
import FoodCache from './facility/food-cache.svg'
import GarbageNa from './facility/garbage-na.svg'
import Garbage from './facility/garbage.svg'
import GatehouseNa from './facility/gatehouse-na.svg'
import Gatehouse from './facility/gatehouse.svg'
import GroupCampingNa from './facility/group-camping-na.svg'
import GroupCamping from './facility/group-camping.svg'
import HorseshoesNa from './facility/horseshoes-na.svg'
import Horseshoes from './facility/horseshoes.svg'
import HotSpringNa from './facility/hot-spring-na.svg'
import HotSpring from './facility/hot-spring.svg'
import InformationNa from './facility/information-na.svg'
import Information from './facility/information.svg'
import InformationShelterNa from './facility/information-shelter-na.svg'
import InformationShelter from './facility/information-shelter.svg'
import ParkingNa from './facility/parking-na.svg'
import Parking from './facility/parking.svg'
import PicnicAreaNa from './facility/picnic-area-na.svg'
import PicnicArea from './facility/picnic-area.svg'
import PicnicShelterNa from './facility/picnic-shelter-na.svg'
import PicnicShelter from './facility/picnic-shelter.svg'
import PlaygroundNa from './facility/playground-na.svg'
import Playground from './facility/playground.svg'
import RecyclingNa from './facility/recycling-na.svg'
import Recycling from './facility/recycling.svg'
import SaniStationNa from './facility/sani-station-na.svg'
import SaniStation from './facility/sani-station.svg'
import ShelterNa from './facility/shelter-na.svg'
import Shelter from './facility/shelter.svg'
import ShowersNa from './facility/showers-na.svg'
import Showers from './facility/showers.svg'
import ToiletsNa from './facility/toilets-na.svg'
import Toilets from './facility/toilets.svg'
import VehicleAccessibleCampingNa from './facility/vehicle-accessible-camping-na.svg'
import VehicleAccessibleCamping from './facility/vehicle-accessible-camping.svg'
import WalkInCampingNa from './facility/walk-in-camping-na.svg'
import WalkInCamping from './facility/walk-in-camping.svg'
import WinterCampingNa from './facility/winter-camping-na.svg'
import WinterCamping from './facility/winter-camping.svg'

export function getAmenityIcon(name, active, iconSize = 36) {
  switch (name) {
    case 'ATVing':
      if (active) {
        return <Atv height={iconSize} width={iconSize} />
      } else {
        return <AtvNa height={iconSize} width={iconSize} />
      }
    case 'Canoeing':
      if (active) {
        return <Canoeing height={iconSize} width={iconSize} />
      } else {
        return <CanoeingNa height={iconSize} width={iconSize} />
      }
    case 'Caving':
      if (active) {
        return <Caving height={iconSize} width={iconSize} />
      } else {
        return <CavingNa height={iconSize} width={iconSize} />
      }
    case 'Climbing':
      if (active) {
        return <Climbing height={iconSize} width={iconSize} />
      } else {
        return <ClimbingNa height={iconSize} width={iconSize} />
      }
    case 'Cycling':
      if (active) {
        return <Cycling height={iconSize} width={iconSize} />
      } else {
        return <CyclingNa height={iconSize} width={iconSize} />
      }
    case 'e-Biking':
      if (active) {
        return <EBikes height={iconSize} width={iconSize} />
      } else {
        return <EBikesNa height={iconSize} width={iconSize} />
      }
    case 'Fishing':
      if (active) {
        return <Fishing height={iconSize} width={iconSize} />
      } else {
        return <FishingNa height={iconSize} width={iconSize} />
      }
    case 'Hiking':
      if (active) {
        return <Hiking height={iconSize} width={iconSize} />
      } else {
        return <HikingNa height={iconSize} width={iconSize} />
      }
    case 'Horseback Riding':
      if (active) {
        return <HorsebackRiding height={iconSize} width={iconSize} />
      } else {
        return <HorsebackRidingNa height={iconSize} width={iconSize} />
      }
    case 'Hunting':
      if (active) {
        return <Hunting height={iconSize} width={iconSize} />
      } else {
        return <HuntingNa height={iconSize} width={iconSize} />
      }
    case 'Interpretive Programs':
      if (active) {
        return <InterpretivePrograms height={iconSize} width={iconSize} />
      } else {
        return <InterpretiveProgramsNa height={iconSize} width={iconSize} />
      }
    case 'Marine-Accessible Camping':
      if (active) {
        return <MarineAccessibleCamping height={iconSize} width={iconSize} />
      } else {
        return <MarineAccessibleCampingNa height={iconSize} width={iconSize} />
      }
    case 'Moutain Biking':
      if (active) {
        return <MountainBiking height={iconSize} width={iconSize} />
      } else {
        return <MountainBikingNa height={iconSize} width={iconSize} />
      }
    case 'Pets on Leash':
      if (active) {
        return <PetsOnLeash height={iconSize} width={iconSize} />
      } else {
        return <PetsOnLeashNa height={iconSize} width={iconSize} />
      }
    case 'Sailing':
      if (active) {
        return <Sailing height={iconSize} width={iconSize} />
      } else {
        return <SailingNa height={iconSize} width={iconSize} />
      }
    case 'Scuba Diving':
      if (active) {
        return <ScubaDiving height={iconSize} width={iconSize} />
      } else {
        return <ScubaDivingNa height={iconSize} width={iconSize} />
      }
    case 'Snowmobiling':
      if (active) {
        return <Snowmobiling height={iconSize} width={iconSize} />
      } else {
        return <SnowmobilingNa height={iconSize} width={iconSize} />
      }
    case 'Swimming':
      if (active) {
        return <Swimming height={iconSize} width={iconSize} />
      } else {
        return <SwimmingNa height={iconSize} width={iconSize} />
      }
    case 'Viewpoint':
      if (active) {
        return <Viewpoint height={iconSize} width={iconSize} />
      } else {
        return <ViewpointNa height={iconSize} width={iconSize} />
      }
    case 'Waterskiing':
      if (active) {
        return <Waterskiing height={iconSize} width={iconSize} />
      } else {
        return <WaterskiingNa height={iconSize} width={iconSize} />
      }
    case 'Wilderness Camping':
      if (active) {
        return <WildernessCamping height={iconSize} width={iconSize} />
      } else {
        return <WildernessCampingNa height={iconSize} width={iconSize} />
      }
    case 'Wildlife Viewing':
      if (active) {
        return <WildlifeViewing height={iconSize} width={iconSize} />
      } else {
        return <WildlifeViewingNa height={iconSize} width={iconSize} />
      }
    case 'Windsurfing':
      if (active) {
        return <WindSurfing height={iconSize} width={iconSize} />
      } else {
        return <WindSurfingNa height={iconSize} width={iconSize} />
      }
    case 'Winter Recreation':
      if (active) {
        return <WinterRecreation height={iconSize} width={iconSize} />
      } else {
        return <WinterRecreationNa height={iconSize} width={iconSize} />
      }
    case 'Accessibility Information':
      if (active) {
        return <Accessibility height={iconSize} width={iconSize} />
      } else {
        return <AccessibilityNa height={iconSize} width={iconSize} />
      }
    case 'Amphitheatre':
      if (active) {
        return <Amphitheatre height={iconSize} width={iconSize} />
      } else {
        return <AmphitheatreNa height={iconSize} width={iconSize} />
      }
    case 'Bike Park':
      if (active) {
        return <BikePark height={iconSize} width={iconSize} />
      } else {
        return <BikeParkNa height={iconSize} width={iconSize} />
      }
    case 'Boat Launch':
      if (active) {
        return <BoatLaunch height={iconSize} width={iconSize} />
      } else {
        return <BoatLaunchNa height={iconSize} width={iconSize} />
      }
    case 'Campfires':
      if (active) {
        return <Campfires height={iconSize} width={iconSize} />
      } else {
        return <CampfiresNa height={iconSize} width={iconSize} />
      }
    case 'Drinking Water':
      if (active) {
        return <DrinkingWater height={iconSize} width={iconSize} />
      } else {
        return <DrinkingWaterNa height={iconSize} width={iconSize} />
      }
    case 'Electrical Hookups':
      if (active) {
        return <ElectricalHookUps height={iconSize} width={iconSize} />
      } else {
        return <ElectricalHookUpsNa height={iconSize} width={iconSize} />
      }
    case 'Electrical Hook Ups':
      if (active) {
        return <ElectricalHookUps height={iconSize} width={iconSize} />
      } else {
        return <ElectricalHookUpsNa height={iconSize} width={iconSize} />
      }
    case 'Electrical Outlets':
      if (active) {
        return <ElectricalOutlets height={iconSize} width={iconSize} />
      } else {
        return <ElectricalOutletsNa height={iconSize} width={iconSize} />
      }
    case 'Food Cache':
      if (active) {
        return <FoodCache height={iconSize} width={iconSize} />
      } else {
        return <FoodCacheNa height={iconSize} width={iconSize} />
      }
    case 'Garbage':
      if (active) {
        return <Garbage height={iconSize} width={iconSize} />
      } else {
        return <GarbageNa height={iconSize} width={iconSize} />
      }
    case 'Gatehouse':
      if (active) {
        return <Gatehouse height={iconSize} width={iconSize} />
      } else {
        return <GatehouseNa height={iconSize} width={iconSize} />
      }
    case 'Group Camping':
      if (active) {
        return <GroupCamping height={iconSize} width={iconSize} />
      } else {
        return <GroupCampingNa height={iconSize} width={iconSize} />
      }
    case 'Horseshoe Pits':
      if (active) {
        return <Horseshoes height={iconSize} width={iconSize} />
      } else {
        return <HorseshoesNa height={iconSize} width={iconSize} />
      }
    case 'Hot Spring':
      if (active) {
        return <HotSpring height={iconSize} width={iconSize} />
      } else {
        return <HotSpringNa height={iconSize} width={iconSize} />
      }
    case 'Information':
      if (active) {
        return <Information height={iconSize} width={iconSize} />
      } else {
        return <InformationNa height={iconSize} width={iconSize} />
      }
    case 'Information Shelter':
      if (active) {
        return <InformationShelter height={iconSize} width={iconSize} />
      } else {
        return <InformationShelterNa height={iconSize} width={iconSize} />
      }
    case 'Parking':
      if (active) {
        return <Parking height={iconSize} width={iconSize} />
      } else {
        return <ParkingNa height={iconSize} width={iconSize} />
      }
    case 'Picnic Areas':
      if (active) {
        return <PicnicArea height={iconSize} width={iconSize} />
      } else {
        return <PicnicAreaNa height={iconSize} width={iconSize} />
      }
    case 'Picnic Shelters':
      if (active) {
        return <PicnicShelter height={iconSize} width={iconSize} />
      } else {
        return <PicnicShelterNa height={iconSize} width={iconSize} />
      }
    case 'Playground':
      if (active) {
        return <Playground height={iconSize} width={iconSize} />
      } else {
        return <PlaygroundNa height={iconSize} width={iconSize} />
      }
    case 'Recycling':
      if (active) {
        return <Recycling height={iconSize} width={iconSize} />
      } else {
        return <RecyclingNa height={iconSize} width={iconSize} />
      }
    case 'Sani-Station/Dump':
      if (active) {
        return <SaniStation height={iconSize} width={iconSize} />
      } else {
        return <SaniStationNa height={iconSize} width={iconSize} />
      }
    case 'Cabins/Huts':
      if (active) {
        return <Shelter height={iconSize} width={iconSize} />
      } else {
        return <ShelterNa height={iconSize} width={iconSize} />
      }
    case 'Showers':
      if (active) {
        return <Showers height={iconSize} width={iconSize} />
      } else {
        return <ShowersNa height={iconSize} width={iconSize} />
      }
    case 'Pit or Flush Toilets':
      if (active) {
        return <Toilets height={iconSize} width={iconSize} />
      } else {
        return <ToiletsNa height={iconSize} width={iconSize} />
      }
    case 'Vehicle-Accessible Camping':
      if (active) {
        return <VehicleAccessibleCamping height={iconSize} width={iconSize} />
      } else {
        return <VehicleAccessibleCampingNa height={iconSize} width={iconSize} />
      }
    case 'Walk-In Camping':
      if (active) {
        return <WalkInCamping height={iconSize} width={iconSize} />
      } else {
        return <WalkInCampingNa height={iconSize} width={iconSize} />
      }
    case 'Winter Camping':
      if (active) {
        return <WinterCamping height={iconSize} width={iconSize} />
      } else {
        return <WinterCampingNa height={iconSize} width={iconSize} />
      }
  }
}

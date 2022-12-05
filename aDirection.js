Judge {
  judge(now) {
     return getOpinionOn(now);
  },
  suggestStandard(myStandard) {
    // return Judges.judge(myStandard);
  }
}

Standard {
  directionOf() {
    return getDirection();
  }
  suggestDirection() {
    // 
  }
}

Land {
  Standards
  Judges
  LandToLand
}

Tribe {
  Standards
  Judges
  TribeToTribe
}

Now {
  Standards
  Judges
  NowToNow
  Me {
    Standards
    Judges
    MeToMe
  }
}

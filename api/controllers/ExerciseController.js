/**
 * ExerciseController
 *
 * @description :: Server-side logic for managing exercises
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    generateData: (req, res) => {
    
        Exercise.create([
            {
                "type": "W",
                "name": "LongCycle"
            },
            {
                "type": "G",
                "name": "AirSquat"
            },
            {
                "type": "G",
                "name": "BackExtensions"
            },
            {
                "type": "W",
                "name": "BackSquat"
            },
            {
                "type": "G",
                "name": "Backtuck"
            },
            {
                "type": "W",
                "name": "BallSlams"
            },
            {
                "type": "G",
                "name": "BarMuscle-up"
            },
            {
                "type": "W",
                "name": "Barbellbenchpress"
            },
            {
                "type": "W",
                "name": "BarbellDeadlift"
            },
            {
                "type": "W",
                "name": "BarbellSit-ups"
            },
            {
                "type": "W",
                "name": "BarbellSnatch"
            },
            {
                "type": "G",
                "name": "Bearcrawl"
            },
            {
                "type": "G",
                "name": "BoxJump"
            },
            {
                "type": "G",
                "name": "BoxJumpOvers"
            },
            {
                "type": "G",
                "name": "Burpee"
            },
            {
                "type": "G",
                "name": "BurpeeBarMuscle-ups"
            },
            {
                "type": "G",
                "name": "Burpeeboxjump"
            },
            {
                "type": "G",
                "name": "BurpeeMuscleUps"
            },
            {
                "type": "G",
                "name": "BurpeesBar-Facing"
            },
            {
                "type": "W",
                "name": "Carrying"
            },
            {
                "type": "G",
                "name": "ChestToBarPull-up"
            },
            {
                "type": "W",
                "name": "Clean"
            },
            {
                "type": "W",
                "name": "Cleanandjerk"
            },
            {
                "type": "W",
                "name": "Cluster"
            },
            {
                "type": "W",
                "name": "Dendy"
            },
            {
                "type": "G",
                "name": "DevelopingPushups"
            },
            {
                "type": "G",
                "name": "Dip"
            },
            {
                "type": "M",
                "name": "DoubleUnders"
            },
            {
                "type": "W",
                "name": "DumbbellHangsplitsnatch"
            },
            {
                "type": "W",
                "name": "Dumbbellhangsquatclean"
            },
            {
                "type": "W",
                "name": "DumbbellSplitClean"
            },
            {
                "type": "W",
                "name": "DumbBellThruster"
            },
            {
                "type": "W",
                "name": "DumbellPowerSnatch"
            },
            {
                "type": "W",
                "name": "DumbellSnatchtri-panel"
            },
            {
                "type": "W",
                "name": "DumbellSplitLifts"
            },
            {
                "type": "W",
                "name": "Farmer'swalk"
            },
            {
                "type": "G",
                "name": "FloorWipers"
            },
            {
                "type": "W",
                "name": "FrontSquat"
            },
            {
                "type": "G",
                "name": "GHD(Glute-Ham)Sit-up"
            },
            {
                "type": "W",
                "name": "Groundtooverhead"
            },
            {
                "type": "G",
                "name": "Handstand"
            },
            {
                "type": "G",
                "name": "HandstandPush-ups"
            },
            {
                "type": "W",
                "name": "HangClean"
            },
            {
                "type": "W",
                "name": "HangPowerClean"
            },
            {
                "type": "W",
                "name": "HangPowerSnatch"
            },
            {
                "type": "W",
                "name": "HangSnatch"
            },
            {
                "type": "W",
                "name": "HangSquatClean"
            },
            {
                "type": "W",
                "name": "Jerk"
            },
            {
                "type": "G",
                "name": "JumpingPullups"
            },
            {
                "type": "G",
                "name": "JumpingSquats"
            },
            {
                "type": "W",
                "name": "KettlebellFigure8"
            },
            {
                "type": "W",
                "name": "Kettlebellpressinthesquat"
            },
            {
                "type": "W",
                "name": "KettlebellSnatch"
            },
            {
                "type": "W",
                "name": "KettlebellSwing"
            },
            {
                "type": "W",
                "name": "KettleBellTaters"
            },
            {
                "type": "W",
                "name": "Kettlebellthruster"
            },
            {
                "type": "G",
                "name": "KippingPull-ups"
            },
            {
                "type": "G",
                "name": "KneestoElbows"
            },
            {
                "type": "G",
                "name": "L-Pull-up"
            },
            {
                "type": "G",
                "name": "L-sit"
            },
            {
                "type": "G",
                "name": "L-sitonbar"
            },
            {
                "type": "G",
                "name": "L-sitonrings"
            },
            {
                "type": "W",
                "name": "MedicineBallCleans"
            },
            {
                "type": "M",
                "name": "mountainclimber"
            },
            {
                "type": "W",
                "name": "Musclesnatch"
            },
            {
                "type": "G",
                "name": "Muscle-ups"
            },
            {
                "type": "G",
                "name": "OneLeggedSquat(ThePistol)"
            },
            {
                "type": "W",
                "name": "OverheadSquat"
            },
            {
                "type": "W",
                "name": "Overheadwalk"
            },
            {
                "type": "G",
                "name": "Plank"
            },
            {
                "type": "W",
                "name": "PowerClean"
            },
            {
                "type": "W",
                "name": "PowerSnatch"
            },
            {
                "type": "W",
                "name": "PressingSnatchBalance"
            },
            {
                "type": "W",
                "name": "PushJerk"
            },
            {
                "type": "W",
                "name": "Pushjerkbehind"
            },
            {
                "type": "W",
                "name": "PushJerkKettlebell"
            },
            {
                "type": "W",
                "name": "PushPress"
            },
            {
                "type": "W",
                "name": "PushPressBehind"
            },
            {
                "type": "G",
                "name": "Push-upStandards"
            },
            {
                "type": "G",
                "name": "Ringchestfly"
            },
            {
                "type": "G",
                "name": "RingDips"
            },
            {
                "type": "G",
                "name": "Ringhandstandpush-ups"
            },
            {
                "type": "G",
                "name": "Ringplankcrunches"
            },
            {
                "type": "G",
                "name": "Ringpush-ups"
            },
            {
                "type": "G",
                "name": "RingRows"
            },
            {
                "type": "G",
                "name": "RopeClimb"
            },
            {
                "type": "M",
                "name": "Rowing"
            },
            {
                "type": "W",
                "name": "SandbagBearhugSquat"
            },
            {
                "name": "SandbagDeadlift"
            },
            {
                "type": "W",
                "name": "SandbagShouldering"
            },
            {
                "type": "W",
                "name": "ShoulderPress"
            },
            {
                "type": "W",
                "name": "ShouldertoOverhead(FS2OH)"
            },
            {
                "type": "M",
                "name": "Shuttlesprint"
            },
            {
                "type": "G",
                "name": "Sit-ups"
            },
            {
                "type": "W",
                "name": "Slamballovershoulder"
            },
            {
                "type": "W",
                "name": "Snatch"
            },
            {
                "type": "W",
                "name": "SnatchBalance"
            },
            {
                "type": "W",
                "name": "SquatClean"
            },
            {
                "type": "W",
                "name": "SquatSnatches"
            },
            {
                "type": "G",
                "name": "StandardPull-up"
            },
            {
                "type": "M",
                "name": "Standingbroad-jump"
            },
            {
                "type": "W",
                "name": "Stiffleggeddeadlift"
            },
            {
                "type": "W",
                "name": "SumoDeadLiftHighPull"
            },
            {
                "type": "W",
                "name": "Theslopeswithabarbellonyourshoulders"
            },
            {
                "type": "W",
                "name": "Thruster"
            },
            {
                "type": "G",
                "name": "ToestoBar"
            },
            {
                "type": "G",
                "name": "TowelPullup"
            },
            {
                "type": "M",
                "name": "Triple-Unders"
            },
            {
                "type": "W",
                "name": "TurkishGetUp"
            },
            {
                "type": "G",
                "name": "TurkishGet-upSandbag"
            },
            {
                "type": "W",
                "name": "TwoKettlebellSnatch"
            },
            {
                "type": "W",
                "name": "Twokettlebellthruster"
            },
            {
                "type": "G",
                "name": "V-situp"
            },
            {
                "type": "W",
                "name": "WalkingLunges"
            },
            {
                "type": "W",
                "name": "WallBall"
            },
            {
                "type": "W",
                "name": "Wallball2fer1"
            },
            {
                "type": "G",
                "name": "WallWalk"
            },
            {
                "type": "M",
                "name": "Warm-up"
            },
            {
                "type": "G",
                "name": "WeightedPullup"
            },
            {
                "type": "G",
                "name": "Windshieldwipers"
            }
        ])
        .then(() => {
           return res.json({
               done: true
           }); 
        })
        .catch((error) => {
            return res.json(error);
        })
    }
	
};
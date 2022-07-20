function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/raTK7ktFy/model.json",MODEL)
}

function MODEL()
{
    Classifier.classify(AURA);
}

function AURA(error,result)
{
if(error)
{
    console.error(error);
}
}
'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports. < > = (req, res) => {
  const app = new ActionsSdkApp({
    request: req,
    response: res
  });

  function intentHandler(app) {
    let intent = (app.data.intent == null) ? app.getIntent() : app.data.intent;

    switch (intent) {
      case app.StandardIntents.MAIN:
        mainIntent(app);
        break;
      case com.wwustc.google.home.INFO:
        infoIntent(app);
        break;
      case com.wwustc.google.home.DEMO;
      demoIntent(app);
      break;
    }
  }

  app.handleRequest(intentHandler);
}

function mainIntent(app) {
  let inputPrompt = app.buildInputPrompt(
    true,
    '<speak>' +
    'Okay, welcome to the STC, how can I help you?'
    '/<speak>'
  );
  app.ask(inputPrompt);
}

function infoIntent(app) {
  let infoPrompt = app.buildInputPrompt(
    true,
    '<speak>' +
    'test test test test test' +
    '/<speak>'
  );
}

function demoIntent(app) {
  let demoPrompt = app.buildInputPrompt(
    true,
    /*
     * This will begin the SSML speech, you'll notice that any code that is
     * authored by me (Alex Ayala) will have all responses in SSML format.  I
     * believe that having the String set up as a SSML will allow ease of
     * editing in the future, in case a string that seems like it'll work
     * straight up has a pronunciation problem, in that case it'll need to be
     * converted to SSML **anyways**
     *
     * Most documentation concerning SSML can be found at:
     * https://developers.google.com/actions/reference/ssml
     */

    '<speak>' +

    /*
     * I know this looks gross, this is **showing off** the paragraph and
     * sentence styling of SSMl. At the time of writing this comment, I believe
     * it is unnecessary to have to format your speech as so, I believe the
     * interpretor is intelligent enough to have pauses and breaks between
     * sentences and paragraphs.
     *
     * If I find there is a valid reason to use this styling, I will update
     * this comment, until then, this will serve for example sake.
     */
    '<p>' +
    '<s>' +
    'Hello, this is a short demo to show what I, Google Assistant, can do! ' +
    '</s><s>' +
    'This demo is most useful for developers who can look at the code for ' +
    'this demo. ' +
    '</s><s>' +
    'Otherwise I\'ll be saying nonsense. ' +
    '</s><s>' +
    'Here\'s an example of a pause of 3 seconds.' +
    '</s>'
    '</p>'

    /*
     * Breaks are very easy, pretty self-explantory.
     * I'm sure "3m" would work as well, but I hope that we only use break in
     * seconds.
     */
    '<break time="3s"/>' +

    'I will now say 10 in 3 different ways. ' +
    /*
     * This next few sayings are example of how to tell Google Assistant the
     * way you want things pronounced. 10 can be said as ten, one oh, or tenth.
     *
     * For the attribute <say-as>, there are 2 additional attributes,
     * telephone number and time. Information about those and others are here:
     * https://www.w3.org/TR/ssml-sayas/
     *
     * That being said, you might ask why would you do this lengthy say-as to
     * say tenth, when you can literally type out tenth vs 10.
     *
     * Google Assistant is not built exclusively for voice or for Google Home.
     * When users use Google Assistant it may be on their phone, on their phone
     * they can see the literal text that Google Assistant is saying to them.
     *
     * In some context it may be useful to display a string as *something* and
     * have it pronounced as *something* else. Saying your delivery will arrive
     * at 10:00PM, makes more sense written out, but pronounced literally, ten
     * oh oh pm sounds weird. Ten PM also looks odd written out.
     *
     * That being said, this will also mostly server per example sake. It's
     * useful to know about, but since we're dealing with voice chat
     * specifically, it won't help us much.
     */
    '<say-as interpret-as="characters">' +
    'This is as characters. ' +
    '10' +
    '</say-as>' +

    '<say-as interpret-as="cardinal">' +
    'This is as cardinal. ' +
    '10' +
    '</say-as>' +

    '<say-as interpret-as="ordinal">' +
    'This is as ordinal. ' +
    '</say-as>' +

    'As a last example of the feature \'speak as \', I can also say dates! ' +

    '<say-as interpret-as="date" format="ymd">' +
    '1960-09-10' +
    '</say-as>' +

    /*
     * Demo of aliases, I won't write up a long paragraph again, use this as
     * needed, Google Home will say "Student Technology Center" but in text
     * will show "STC". Won't be used often at all.
     */
    'I can also abbreivate things in text but say differently, for example, ' +
    'I work for the ' +
    '<sub alias="Student Technology Center">' +
    'STC' +
    '</sub>' +

    'This won\'t make much sense in voice, but again, look at my code please.'

    '/<speak>' +
  )

  app.tell(demoPrompt);
}

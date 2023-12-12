document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get input values
        var nm1 = document.getElementById("nm1").value;
        var plc1 = document.getElementById("plc1").value;
        var fill1 = document.getElementById("fill1").value;
        var fill2 = document.getElementById("fill2").value;
        var art1 = document.getElementById("art1").value;
        var adj1 = document.getElementById("adj1").value;
        var Name1 = document.getElementById("Name1").value;
        var smt1 = document.getElementById("smt1").value;
        var act1 = document.getElementById("act1").value;
        var ft = document.getElementById("ft").value;
        var ani = document.getElementById("ani").value;
        var obj2 = document.getElementById("obj2").value;
        var plc2 = document.getElementById("plc2").value;
        var act2 = document.getElementById("act2").value;
        var obj1 = document.getElementById("obj1").value;
        var act3 = document.getElementById("act3").value;
        var act4 = document.getElementById("act4").value;



        // Get selected radio button values
        var btn1 = document.querySelector('input[name="voice_head"]:checked');
        var btn2 = document.querySelector('input[name="place"]:checked');

        // Create the Mad Libs story
        var madLibsStory = `${nm1} was a knight from the distant land of ${plc1}. He was ${fill1} and ${fill2}. The knight was sent to recover the ${art1} as his king commanded. As he rode his ${adj1} horse named ${Name1} into the night; the weight of his responsibility was too heavy, and his body started to ache. The night was so long that it seemed like the darkness was not fading away.

So long was the night his horse ran away in fear. All alone he saw ${smt1} that pointed to a stone trail too long to see the end. He then ${act1} the trail into the endless night. During his journey, he started to grow ${ft} on his head; it was awkward at first, but he got used to it. The end of the road he saw was looking for, the end of his quest, the end of his suffering... But it was guarded by ${ani} inside a ${plc2}. And the only way to get it was to ${act2} the creature with a ${obj1}.

After defeating the creature, the gallant hero transformed back into a human, retrieved the artifact, and trailed back to his home. He was received by a desolated image of ${obj2}, the castles all gone, and everything he once loved dead or missing. In his hand, the artifact he was meant to have recovered ${act3} as if it were ${act4} to him. In his thoughts, the voice ${btn1} was raised, telling him to start over and build a new ${btn2} for himself.`;

          // Display the story in the modal
          var modalBody = document.querySelector(".modal-body");
          modalBody.innerText = madLibsStory;
  
          // Show the modal
          $("#myModal").modal("show");
      });
  });
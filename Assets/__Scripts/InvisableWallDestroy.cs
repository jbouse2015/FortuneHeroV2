using UnityEngine;
using System.Collections;

public class InvisableWallDestroy : MonoBehaviour {

    public Transform other;
    void OnGUI()
    {
        GUI.skin.box.fontSize = 24;
        if (TreasureCollection.treasureTotal == 1)
        {
            Destroy(gameObject);
        }
        else {
            if (other)
            {
                float dist = Vector3.Distance(other.position, transform.position);
                if (dist < 2)
                {
                    GUI.Box(new Rect(200, 50, 400, 100), "" + (TreasureCollection.treasureTotal-1) + " treasures needed.\n" +
                        "The path ahead is dangerous!\n Collect more treasure to proceed.");
                }
            }
        }
    }
}

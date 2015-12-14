using UnityEngine;
using System.Collections;

public class Level_2 : MonoBehaviour {

    // Use this for initialization
    public Transform other;
    void OnGUI()
    {
        GUI.skin.box.fontSize = 30;

        if (other)
        {
            float dist = Vector3.Distance(other.position, transform.position);
            if (dist < 2)
            {
                GUI.Box(new Rect(200, 50, 350, 100), "Level 2 \n Collect all the treasure \n");
            }
        }
    }
}

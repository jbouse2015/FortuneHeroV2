using UnityEngine;
using System.Collections;

public class LevelCompleteText : MonoBehaviour {

    // Use this for initialization
    public Transform other;
    void OnGUI() {
        GUI.skin.box.fontSize = 30;

        if (other) {
            float dist = Vector3.Distance(other.position, transform.position);
            if (dist < 2) {
                GUI.Box(new Rect(150, 50, 300, 50), "Level Complete!");
            }
        }
    }
}

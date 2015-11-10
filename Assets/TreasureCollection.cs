using UnityEngine;
using System.Collections;

public class TreasureCollection : MonoBehaviour {

    int treasureTotal = 7;

    //if we collide with treasure destroy and decrement total
    void OnCollisionEnter2D(Collision2D collision){
        if (collision.gameObject.tag == "Treasure") {
            treasureTotal -= 1;
            Destroy(collision.gameObject);
        }
    }
}

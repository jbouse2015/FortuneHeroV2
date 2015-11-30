using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class TreasureCollection : MonoBehaviour {

    private int treasureTotal;
    public Text countText;
    public Text winText;

    void Start()
    {
        treasureTotal = 7;
        SetCountText();
        winText.text = "";
    }

    //if we collide with treasure destroy and decrement total
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Treasure") {
            treasureTotal -= 1;
            Destroy(collision.gameObject);
            SetCountText(); 
        }
    }

    //Set treasureTotal ui text
    void SetCountText()
    {
        countText.text = "Treasure Remaining: " + treasureTotal.ToString();
        if (treasureTotal == 0)
        {
            winText.text = "Level Complete!";
        }
    }
}
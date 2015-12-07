using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class TreasureCollection : MonoBehaviour {

    public static int treasureTotal;
    public Text countText;
    public Text winText;

    public AudioClip pickUpTreasure;
    private AudioSource source;

    void Awake()
    {
        source = GetComponent<AudioSource>();
    }

    void Start()
    {
        treasureTotal = 7;
        SetCountText();
        winText.text = "";

        AudioSource[] audios = GetComponents<AudioSource>();
        source = audios[4];
    }

    //if we collide with treasure destroy and decrement total
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Treasure") {
            treasureTotal -= 1;
            Destroy(collision.gameObject);
            SetCountText();
            source.PlayOneShot(pickUpTreasure, 0.5f);
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
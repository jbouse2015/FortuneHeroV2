using UnityEngine;
using System.Collections;

public class MoveTowardPlayerInRange : MonoBehaviour {

	public float playerRange;
	
	public PlayerController player;

	private Animator anim;
	
	// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();
		anim = GetComponent<Animator> ();
		anim.enabled = false;

	}
	
	// Update is called once per frame
	void Update () {
		
		if (transform.localScale.x < 0 && 
		    player.transform.position.x > transform.position.x && 
		    player.transform.position.x < transform.position.x + playerRange) 
		{
			anim.enabled = true;
		}
		
		if (transform.localScale.x > 0 && 
		    player.transform.position.x < transform.position.x && 
		    player.transform.position.x > transform.position.x - playerRange) 
		{
			anim.enabled = true;
		}
	}
}

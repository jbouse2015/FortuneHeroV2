using UnityEngine;
using System.Collections;

public class ShootAtPlayerInRange : MonoBehaviour {

	public float playerRange;

	public GameObject spear;

	public PlayerController player;

	public Transform launchPoint;

	public float waitBetweenShots;
	private float shotCounter;

		// Use this for initialization
	void Start () {
		player = FindObjectOfType<PlayerController> ();

		shotCounter = waitBetweenShots;
	}
	
	// Update is called once per frame
	void Update () {
		shotCounter -= Time.deltaTime;

		if (transform.localScale.x < 0 && 
			player.transform.position.x > transform.position.x && 
			player.transform.position.x < transform.position.x + playerRange &&
		    shotCounter < 0) 
		{
			Instantiate(spear, launchPoint.position, launchPoint.rotation);
			shotCounter = waitBetweenShots;
		}

		if (transform.localScale.x > 0 && 
		    player.transform.position.x < transform.position.x && 
		    player.transform.position.x > transform.position.x - playerRange &&
		    shotCounter < 0) 
		{
			Instantiate(spear, launchPoint.position, launchPoint.rotation);
			shotCounter = waitBetweenShots;
		}
	}
}

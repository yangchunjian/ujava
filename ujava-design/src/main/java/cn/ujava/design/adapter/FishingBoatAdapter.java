package cn.ujava.design.adapter;


public class FishingBoatAdapter implements RowingBoat {

  private final FishingBoat boat = new FishingBoat();

  public final void row() {
    boat.sail();
  }
}

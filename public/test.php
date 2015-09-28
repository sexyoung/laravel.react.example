<?php

class Order {
	public function calculateFee(IShipment $shipment)
  {
      return $fee = $shipment->getFee();
  }
}

interface IShipment
{ 
    public function getFee();
}

class HsinchuShipment implements IShipment // 新竹貨運
{ 
    public function getFee() { return 10; }
}

class BlackCatShipment implements IShipment // 黑貓快遞
{ 
    public function getFee() { return 20; }
}

class PostOfficeShipment implements IShipment // 郵局
{ 
    public function getFee() { return 30; }
}

$o = new Order();
$hs = new HsinchuShipment();

echo $o->calculateFee($hs);